const path = require('path');

const PORT = 8550;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        single: {
            entry: 'src/single/main.js',
            template: 'public/single.html',
            filename: 'single/index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'single']
        },
        fpx: {
            entry: 'src/components/fp/fp.js',
            template: 'public/fp.html',
            filename: 'fp/index.html'
        },
        ioc: {
            entry: 'src/components/ioc/ioc.ts',
            template: 'public/ioc.html',
            filename: 'ioc/index.html'
        }
    },
    devServer: {
        port: PORT,
        historyApiFallback: {
            rewrites: [
                {from: /^\/single\/?.*/, to: path.posix.join('/', 'single/index.html')},
                {from: /^\/fp\/?.*/, to: path.posix.join('/', 'fp/index.html')},
                {from: /^\/ioc\/?.*/, to: path.posix.join('/', 'ioc/index.html')},
                {from: /./, to: path.posix.join('/', 'index.html')}
            ]
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
        config.resolve.alias.set('@services', path.resolve(__dirname, 'src/services'));
        config.resolve.alias.set('@apis', path.resolve(__dirname, 'src/views'));
        config.resolve.alias.set('@enum', path.resolve(__dirname, 'src/enum'));
        // config.resolve.alias.set('@apis', path.resolve(__dirname, 'src/apis'));
        return config;
    }
};
