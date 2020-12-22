const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const loader = require('ts-loader/dist');
const { LoaderOptionsPlugin } = require('webpack');

// Electron Webpack Configuration
const electronConfiguration = {
  // Build Mode
  mode: 'development',
  // Electron Entrypoint
  entry: './src/main.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }
    
  ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  }
}

module.exports = [
  electronConfiguration,
];

const reactConfiguration = {
    mode: 'development',
    entry: './src/renderer.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    resolve: {
      alias: {
        ['@']: path.resolve(__dirname, 'src')
      },
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        
      ]
      
    },
    
    output: {
      path: __dirname + '/dist',
      filename: 'renderer.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  }

module.exports = [
  electronConfiguration,
  reactConfiguration
];