var webpack = require('./node_modules/webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./Config/helpers')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        'polyfills': './Src/polyfills.ts',
        'vendor': './Src/Vendor.ts',
        'main': './Src/main.ts'
    },
    output: {
        publicPath: '/Build',
        path: helpers.root('./Build'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module:
    {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { tsconfig: './tsconfig.json' }
                    },'angular2-template-loader?keepUrl=true'             
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            //{
              //  test: /\.html$/,
                //loader: 'raw-loader'
            //},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: /\.html$/, exclude:"/node_modules/", loader: "file-loader?name=[name].[ext]&publicPath=/Build/Views/&outputPath=Views/"}
           
        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./Src'), // location of your src   
            {} // a map of your routes
        ),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it|en/),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),
        new ExtractTextPlugin('[name].css')//,
       // new HtmlWebpackPlugin({
         //   template: './templates/index.html',
           // output:'./index.html'
       // })
    ],

    devtool: 'source-map'
}
