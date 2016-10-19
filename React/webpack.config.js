var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: { app: ['webpack-dev-server/client?http://localhost:8080/','./src/entry.js']},
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          "include": [path.resolve(__dirname, './src')],
          loader: "babel-loader",

          // Only run `.js` and `.jsx` files through Babel
          test: /\.jsx?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react'],
          }
        },
      ]
    }
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}