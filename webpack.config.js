/* eslint-disable no-undef */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const dotenv = require('dotenv')

const localEnv = dotenv.config().parsed

module.exports = (env) => {
  return {
    entry: './src/index.js',
    mode: env.dev === true ? 'development' : 'production',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[name]--[hash:base64:5]'
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new ESLintPlugin({
        exclude: ['node_modules', 'dist'],
        context: path.resolve(__dirname, 'src')
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
        'process.env.MAP_KEY': localEnv.MAP_KEY
          ? JSON.stringify(localEnv.MAP_KEY)
          : JSON.stringify(process.env.MAP_KEY)
      })
    ],
    devtool: env.dev ? 'eval-source-map' : 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: false,
      port: 3000,
      historyApiFallback: {
        index: 'index.html'
      }
    }
  }
}
