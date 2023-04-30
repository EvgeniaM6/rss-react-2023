import coverage from '@cypress/code-coverage/task';

module.export = (on, config) => {
  coverage(on, config);
  // include any other plugin code...

  // It's IMPORTANT to return the config object
  // with any changed environment variables
  return config;
};
