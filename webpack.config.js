const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },

  entry: './src/main.jsx',

  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/': path.resolve(__dirname, 'src'),
    },

    // modules: [
    //   path.join(__dirname, 'node_modules')
    // ]
  },

  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   loader: 'esbuild-loader',
      //   options: {
      //     loader: 'js',  // Or 'ts' if you don't need tsx
      //     target: 'es2017'
      //   }
      // },
      {
        test: /\.jsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',  // Or 'ts' if you don't need tsx
          target: 'es2017'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      // minify: true,
    }),
    // process
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};
