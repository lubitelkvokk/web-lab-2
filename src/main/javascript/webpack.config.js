const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./content/index.ts",
    mode: "development",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, './content')]
            }
        ]
    },
    output: {
        publicPath: path.resolve(__dirname, '../webapp/public'),
        filename: "bundle.js",
        path: path.resolve(__dirname, '../webapp/public')
    },
    resolve: {
        extensions: ['.ts', '.js'] // Важно указать расширение .ts и .js
    }
}
