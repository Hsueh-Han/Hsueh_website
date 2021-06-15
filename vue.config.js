module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Hsueh | Web Developer';
        return args;
      });
  },
  publicPath: './',
};