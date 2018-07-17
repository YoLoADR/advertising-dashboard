const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

// plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
    'dist'
]

// the clean options to use
let cleanOptions = {
    root: __dirname,
    verbose: false, // Write logs to console.
    dry: false
}

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        // The build folder.
        path: resolveApp('dist'),
        // Generated JS file names (with nested folders).
        // There will be one main bundle, and one file per asynchronous chunk.
        // We don't currently advertise code splitting but Webpack supports it.
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        // We inferred the "public path" (such as / or /my-project) from homepage.
        publicPath: publicPath
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            Api: path.resolve(__dirname, 'src/api/'),
            Components: path.resolve(__dirname, 'src/components/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Container: path.resolve(__dirname, 'src/container/'),
            Views: path.resolve(__dirname, 'src/views/'),
            Helpers: path.resolve(__dirname, 'src/helpers/'),
            Themes: path.resolve(__dirname, 'src/themes/')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: false,
        compress: true,
        port: 8080, // port number
        historyApiFallback: true,
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
            favicon: './static/favicon.png'
        }),
        new CopyWebpackPlugin([{
            from: 'static',
            to: 'static'
        }]),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename: "static/css/[name].[contenthash:8].css"
        }),
        //jquery plugin
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ]
}
