/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'webpack.js',
  },
  optimization: {
    minimize: false
  },
  stats: {
    // Display bailout reasons
    optimizationBailout: true,
  },
}