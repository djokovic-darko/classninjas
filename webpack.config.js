const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const analyzeBundle = process.env.ANALYZE === 'true';

const plugins = [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
        $              : 'jquery',
        jQuery         : 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: Infinity
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new BrowserSyncPlugin({
        host: 'https://classninjasclub.com/pages/landing-page',
        port: 3000,
        proxy: 'https://classninjasclub.com/',
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
                fn: function (snippet, match) {
                    return snippet + match;
                }
            }
        },
        files: ['**/*.liquid', '**/*.html', './assets/*.js', './assets/*.css']
    }, {
        reload: false
    }),
    new ProgressBarPlugin({
        format: '\u001b[90m\u001b[44mBuild\u001b[49m\u001b[39m [:bar] \u001b[32m\u001b[1m:percent\u001b[22m\u001b[39m (:elapseds) \u001b[2m:msg\u001b[22m\r',
        renderThrottle: 100,
        summary: false,
        clear: true
    }),
];

if (isProduction) {
    plugins.push(
        new CleanPlugin([
            'assets',
            '**/*.{css,js,map}'
        ], {
            root: path.join(__dirname, 'assets'),
            verbose: false,
            beforeEmit: true
        }),
        new UglifyJsPlugin({}),
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    );
}

if (analyzeBundle) {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            defaultSizes: 'gzip',
            openAnalyzer: false
        })
    )
}

module.exports = {
    entry: {
        bundle: './static/js/index.js',
        vendor: './static/js/vendor.js',
        critical: './static/js/critical.js'
    },
    output: {
        path: path.join(__dirname, 'theme/assets/'),
        publicPath: 'theme/assets/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            style: path.resolve(__dirname, './static/scss')
        },
        modules: [path.resolve(__dirname, './static/js'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './static/js')
                ],
                exclude: [
                    path.resolve(__dirname, './static/js/vendor'),
                    /node_modules/
                ],
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                loader: 'file-loader',
                test: /\.(ttf|otf|woff|woff2|eot|svg)$/,
                options: {
                    name: '[name].[ext]'
                }
            },
        ],
    },
    plugins: plugins,
    externals: {

    }
};
