const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "locales": path.resolve(__dirname, 'locales/'),
        "settings": path.resolve(__dirname, 'settings/'),
      }
    }
  }
}