const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin ({
        template: './index.html',
        title: 'Title'
      }),

      new InjectManifest({
        swSrc: './scr-sw.js',
        swDest:'scr-sw.js',
      }),

      new WebpackPwaManifest({
        name: 'week-19-Progressive-web-applications-text-editor-main ',
        short_name: 'Week 19 PWA',
        description: 'Progressive Web App',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        start_url: '.',
        icons: [
          {
            src: path.resolve('src/images/icon.png'),
            sizes: [94, 126, 189, 256, 382, 510],
            destination: path.join('assets', 'icons')
          }
        ]
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
};
