module.exports = {
    entry: "./public/js/index.jsx",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
             {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};
