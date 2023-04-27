import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';
import { Location } from 'react-router-dom';

export function render(url: string | Partial<Location>, context: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    context
  );
}
