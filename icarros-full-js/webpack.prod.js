const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// Configurando ambiente de produção
module.exports = merge(common, {
  mode: 'production',
});