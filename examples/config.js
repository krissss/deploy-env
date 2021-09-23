const path = require('path')

module.exports = {
  deploy_path: path.join(__dirname, '../'),
  envs: {
    dev: path.join(__dirname, 'dev'),
    t1: path.join(__dirname, 't1'),
    t2: path.join(__dirname, 't2'),
    test: path.join(__dirname, 'test'),
  }
}
