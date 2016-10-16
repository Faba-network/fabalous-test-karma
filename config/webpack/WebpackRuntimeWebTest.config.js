var path = require('path');
var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
    output: {
        path: path.join(__dirname,'../../dist/test/'),
        filename: 'test.js'
    },

    devtool: 'eval',

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less']
    },

    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },


    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'css-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'babel?cacheDirectory=true!awesome-typescript-loader?forkChecker=false',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=5000&name=assets/[name]-[hash].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new webpack.NormalModuleReplacementPlugin(/\.(gif|png|less|css)$/, 'node-noop'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production')},
            CLIENT: true,
            SERVER:false,
            TEST:true
        })
    ]
};