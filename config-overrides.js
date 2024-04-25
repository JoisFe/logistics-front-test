module.exports = function override(config, env) {
  config.devServer = {
    ...config.devServer,
    compress: true,
    disableHostCheck: true,
  };
  return config;
};
