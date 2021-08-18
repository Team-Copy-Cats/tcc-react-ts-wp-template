const path = require('path');
module.exports = {
    entry: './src/App/App.tsx',
    output: {
        filename: "app.js",
        publicPath: "/",
        path: "./dist"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};