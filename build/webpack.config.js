var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist/',
    filename: '[name].js',
    library: 'VueComponents',
    libraryTarget: 'umd'
  },
  resolve: {
    root: './lol/lol',
    modulesDirectories: ['node_modules', './src'],
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      {
        test: /\.styl/, loader: "style-loader!css-loader!stylus-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: 'source-map'
};


if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      drop_console: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ];
}
