const path = require('path');

const PORT = 8550;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        single: {
            entry: 'src/single/main.js',
            template: 'public/single.html',
            filename: 'single/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'single']
        }
    },
    devServer: {
        port: PORT,
        historyApiFallback: {
            rewrites: [
                { from: /^\/single\/?.*/, to: path.posix.join('/', 'single/index.html') },
                { from: /./, to: path.posix.join('/', 'index.html') }
            ]
        }
    }
};
