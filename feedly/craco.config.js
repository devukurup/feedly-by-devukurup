const path = require(`path`)

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      apis: path.resolve(__dirname, 'src/apis'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
}
