module.exports = {
    watch: true,
    entry: {
        our_first_react_component: "./app/static/scripts/src/our_first_react_component.js"
    },
    output: {
        path: __dirname + "/app/static/scripts/dist",
        filename: "[name].js",
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