const path = require('path');
const webpack = require('webpack');

const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const isDevelopment = process.env.NODE_ENV !== 'production';

const isCssConfig = () => {
  let plugins = [];

  isDevelopment ?
    plugins = [] :
    plugins = [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      }),
      new CssMinimizerPlugin(),
    ]

  return plugins;
}

const minimizerConfig = () => {
  let plugins = [];

  isDevelopment ?
    plugins = [] :
    plugins = [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.esbuildMinify,
      }),
      new ESBuildMinifyPlugin(),
    ]

  return plugins;
}



module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  devtool: isDevelopment ? 'cheap-module-source-map' : false,

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },

  entry: './src/main',

  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/': path.resolve(__dirname, 'src'),
    },
    extensions: ['', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',  // Or 'ts' if you don't need tsx
          target: 'es2019'
        }
      },
      {
        test: /\.css$/i,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ],
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

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      ...minimizerConfig(),
    ],
  },

  plugins: [
    new webpack.ProgressPlugin(),

    new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      // minify: true,
      minify: !isDevelopment && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    // ProvidePlugin
    new webpack.ProvidePlugin({
      process: 'process/browser',
      React: 'react',
    }),

    ...isCssConfig(),
  ]
};
