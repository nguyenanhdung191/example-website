const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let config = {
    entry: {
        home: "./src/routes/Home",
        about: "./src/routes/About",
        challenge: "./src/routes/Challenge"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "server/public")
    },
    plugins: [
        new UglifyJsPlugin(),
        new CopyWebpackPlugin([
            { from: "src/routes/Home/home.html" },
            { from: "src/routes/About/about.html" },
            { from: "src/routes/Challenge/challenge.html" }
        ])
    ]
};

module.exports = config;
