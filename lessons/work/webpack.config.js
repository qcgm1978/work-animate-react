var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack =require('webpack')
module.exports = {
    entry: './index.js',
    resolve: {
        alias: {
            // bind version of jquery-ui
            //"jquery-ui": "jquery-ui/jquery-ui.js",
            //// bind to modules;
            //modules: path.join(__dirname, "node_modules"),
        }
    },
    output: {
        path: "build",
        filename: 'bundle.js',
        //publicPath: 'index-reactjs.html'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {
                test: /\.s(a|c)ss$/,
                loaders: ["style", "css", "sass"]
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    //'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    //'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                    'url-loader'
                ]
            },
            //{ test: /bower_components\/.+\.(jsx|js)$/,
            //    loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            //}


        ]
    },
    plugins: [
        new LiveReloadPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            //jQuery: "jquery",
            //"window.jQuery": "jquery"
        })
    ]
}
