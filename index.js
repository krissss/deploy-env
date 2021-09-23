const path = require('path')
const fs = require('fs-extra')
const { program } = require('commander');

program
  .option('-c --config <config>', 'config file', './config.js')
  .requiredOption('-e --env <env>', 'which env defined in config')
  .option('-o --overwrite', 'overwrite if file is exist')
  .parse()

const options = program.opts()

// load config file
let configPath = path.join(process.cwd(), options.config)
if (!fs.existsSync(configPath)) {
  throw Error(`config file not exist: ${options.config}`)
}
const config = require(configPath)

// copy
if (!config.envs || !config.envs[options.env]) {
  throw Error(`env not exist: ${options.env}`)
}
if (!config.deploy_path) {
  throw Error(`deploy_path key not exist in configFile`)
}
fs.copySync(config.envs[options.env], config.deploy_path, {
  overwrite: options.overwrite,
})

console.log('Success')
