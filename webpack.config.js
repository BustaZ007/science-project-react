let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
    entry: './app/app.jsx',
    output:{
      path: path.resolve(__dirname, './public'),
      publicPath: '/public/',
      filename: "bundle.js"
      // path: path.resolve(__dirname, './public/js/'),
      // publicPath: 'https://science-project.ru/js/',
      // filename: '[name].[contenthash].js',
      // clean : true,
    },
    devServer: {
      historyApiFallback: true,
      port : 3000,
      open: true,
    },
    module: {
      rules:[
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env', '@babel/preset-react']
          },
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path]_[local]--[hash:base62:5]'
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
}