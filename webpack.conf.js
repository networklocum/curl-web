var webpack = require("webpack")
var CopyWebpackPlugin = require('copy-webpack-plugin')

var build_type = process.env.TYPE || "all"
module.exports = {
    context: __dirname+"/src",
    entry: "./index.js",
    output: {
        filename: "./dist/bundle.js",
        path: __dirname
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: {
                glob:'index.html',
                dot: true
            },
            to: 'dist/'
        }])
    ],
    module: {
        loaders: [{
            test: /.js$/, loader: "babel-loader"
        }, {
            test: /.html$/, loader: "raw"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css$/,
            loader: "style!css"
        }]
    }
}
