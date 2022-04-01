const path = require('path');
const webpack = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';



module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
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

  optimization: {
		minimize: false,
		minimizer: [
			// Use esbuild to minify
			new ESBuildMinifyPlugin(),
		],
	},

  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body',
      // minify: true,
    }),

    // process
    new webpack.ProvidePlugin({
      process: 'process/browser',
			React: 'react',
    }),
  ]
};
