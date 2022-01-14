const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  watch: true,
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/index.html',
          to: '' 
        },
      ]
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '127.0.0.1',
    compress: true,
    port: 9000,
  },
}