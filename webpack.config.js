const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['main', 'contacts'];

module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    about: './pages/about/main.js',
    index: './pages/contacts/main.js',
    contacts: './pages/main/main.js',
    blog: './pages/blog/main.js',
    ideas: './pages/ideas/main.js',
    services: './pages/services/main.js',
    careers: './pages/careers/main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.(img|svg|jpg|jpeg|gif|png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/contacts/contacts.html',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/main/main.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/about/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/blog/blog.html',
      inject: true,
      chunks: ['blog'],
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/careers/careers.html',
      inject: true,
      chunks: ['careers'],
      filename: 'careers.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/ideas/ideas.html',
      inject: true,
      chunks: ['ideas'],
      filename: 'ideas.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/services/services.html',
      inject: true,
      chunks: ['services'],
      filename: 'services.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'eval-source-map',
  devServer: {
    static: true,
    hot: true,
  },
};
