const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    watch: true,
    mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react",
                            {
                                plugins: [
                                    '@babel/plugin-proposal-class-properties',
                                    "@babel/transform-runtime"
                                ]
                            }
                        ]

                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }

            },
            {
                test: /\.scss$/,
                exclude: /..\/node_modules/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};

