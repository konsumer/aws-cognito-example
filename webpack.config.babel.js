import { DefinePlugin, optimize } from 'webpack'
import dotenv from 'dotenv'
import { resolve } from 'path'
const { DedupePlugin, UglifyJsPlugin, OccurrenceOrderPlugin } = optimize

process.env.NODE_ENV == process.env.NODE_ENV || 'development'

dotenv.config()
const exposed = [
  'NODE_ENV',
  'AWS_REGION',
  'AWS_IDENTITYPOOL',
  'AWS_CLIENTAPP'
]
const exposedEnvironment = {}
exposed.forEach(i => { exposedEnvironment[i] = JSON.stringify(process.env[i]) })

const config = {
  devtool: 'eval-source-map',
  entry: {
    client: [
      './src/index.js'
    ]
  },
  output: {
    path: resolve(__dirname, './webroot/build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel' },
      { test: /\.json$/, loaders: ['json'] }
    ]
  },
  plugins: [
    new DedupePlugin(),
    new OccurrenceOrderPlugin(),
    new DefinePlugin({
      'process.env': exposedEnvironment
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJsPlugin())
} else if (process.env.NODE_ENV === 'development') {
  config.entry.client.push('webpack/hot/only-dev-server')
}

export default config
