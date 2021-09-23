# Deploy Env By Config

1. in project root, create an `environments` dir

2. make a config file `config.js` in `environments` dir

```js
const path = require('path')

module.exports = {
  deploy_path: path.join(__dirname, '../'),
  envs: {
    dev: path.join(__dirname, 'dev'),
    t1: path.join(__dirname, 't1'),
    t2: path.join(__dirname, 't2'),
  }
}
```

3. put your envs files to dir under `environments`

dir like:

- root
  - environments
    - dev
      a.xx
      b.xx
    - t1
      a.xx
      b.xx
    - t2
      a.xx
      b.xx
    - config.js

4. open cmd and exec `deploy-env -e <env>`(replace <env> with your `envs` key)

files in `<env>` dir will be copy to `deploy_path`
