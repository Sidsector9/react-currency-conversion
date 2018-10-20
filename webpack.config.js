const path = require( 'path' );

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve( __dirname, 'assets/dist' ),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}