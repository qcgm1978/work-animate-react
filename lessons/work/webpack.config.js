var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: "build",
        filename: 'bundle.js',
        publicPath: 'index-reactjs.html'
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
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin()
    ]
}
