const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
          
             {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              mimetype: "image/png",
              encoding: true,
            },
          },
        ],
      },
            
            
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 4000,
        open:true,
        hot: true, 
        compress: true, 
        historyApiFallback: true,
         },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './src/main.html',
           // chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            filename: 'movieDetails.html',
            template: './src/movieDetails.html',
          //  chunks: ['movieDetails'],
        }),
        new HtmlWebpackPlugin({
            filename: 'searchPage.html',
            template: './src/searchPage.html',
           // chunks: ['searchPage'],
        }),
        new HtmlWebpackPlugin({
            filename: 'tvShows.html',
            template: './src/tvShows.html',
           // chunks: ['tvShows'],
        }),
        new HtmlWebpackPlugin({
            filename: 'TVshowsDetails.html',
            template: './src/TVshowsDetails.html',
          //  chunks: ['TVshowsDetails'],
        }),
       new MiniCssExtractPlugin()
    ]
};
