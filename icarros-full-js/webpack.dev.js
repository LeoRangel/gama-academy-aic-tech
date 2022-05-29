const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// Configurando ambiente de desenvolvimento
// (Complementa o webpack.common acessando por meio do modo dev)
module.exports = merge( common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  }
});