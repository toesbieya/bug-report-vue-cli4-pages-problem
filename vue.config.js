module.exports = {
  pages: {
    index: 'src/main.js',
    mobile: 'src/_mobile/main.js'
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch-index')
    config.plugins.delete('preload-index')
    config.plugins.delete('prefetch-mobile')
    config.plugins.delete('preload-mobile')
  }
};
