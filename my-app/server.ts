import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isTest = process.env.VITEST;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort?: number | undefined
) {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';

  const app = express();

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite: ViteDevServer;
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;

      let template;
      if (!isProd) {
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = indexProd;
      }

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const parts = template.split('<!--app-html-->');

      const stream = render(url, {
        onShellReady() {
          res.write(parts[0]);
          stream.pipe(res);
          res.write(parts[1]);
        },
        onShellError() {
          // do error handling
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e as Error);
      console.log((e as Error).stack);
      res.status(500).end((e as Error).stack);
    }
  });

  return { app };
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(5173, () => {
      console.log('http://localhost:5173');
    })
  );
}
