module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactCYEditor',
      externals: {
        react: 'React'
      }
    }
  }
}
