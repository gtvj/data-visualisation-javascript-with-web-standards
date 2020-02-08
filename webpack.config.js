module.exports = {
    watch: true,
    entry: "./app/static/scripts/src/main.js",
    output: {
        path: __dirname + "/app/static/scripts/dist",
        filename: "app.js",
        publicPath: "assets"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};