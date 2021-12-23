const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {},
    resolve: {
        fallback: {
            console: false,
            extensions: ['.ts', '.tsx', '.js'],
        }
    },
    devServer: {
        compress: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'templates/index.html'),
            title: 'fast-dom'
        })
    ]
}