const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.ts")

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.ts`)
  const config = merge(commonConfig, envConfig)
  return config
}
