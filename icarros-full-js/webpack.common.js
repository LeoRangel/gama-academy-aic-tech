const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathToMainJs = require.resolve('./src/app.js');
const pathToIndexCss = require.resolve('./src/css/style.css');
const pathToIndexHtml = require.resolve('./src/index.html');
const pathToIndexFavicon = require.resolve('./src/img/favicon.ico');


module.exports = {
  // Entradas
  entry: [
    '@babel/polyfill',
    pathToMainJs,
    pathToIndexCss,
    pathToIndexHtml,
    pathToIndexFavicon
  ],
  plugins: [
    new CleanWebpackPlugin()
  ],
  // Arquivo de saída com código minificado
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        // Todos os arquivos com extensão .js (excluíndo a pasta node_modules)
        // vão usar o plugin babel-loader
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // Mapeia arquivos de estilos
        test: /\.(css|sass|scss)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name][ext][query]'
        }
      },
      {
        // Mapeia arquivos html
        test: /\.html$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]'
        }
      },
      {
        // Mapeia arquivos de imagem
        test: /\.(png|jpg|ico|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      }
    ]
  },

}