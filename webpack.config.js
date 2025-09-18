// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.js',  // Updated to match your file structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
};