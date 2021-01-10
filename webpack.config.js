const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        contentBase: [
            path.join(__dirname, 'public'),
        ],
        compress: true,
        port: 8008,
        index: 'index.html'
    }
};