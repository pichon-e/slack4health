var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
      angular2: [
        'zone.js',
        'reflect-metadata',
        'rtts_assert/rtts_assert',
      ],
  		app: [
  			/*
  				Include any 3rd party js lib here
  			*/
        'material-design-lite/material',
  			'./app/hello/hello'
  		]
  	},
    output: {
        path: __dirname +'/dist',
        publicPath: 'dist/',
        filename: '[name].js',
        //sourceMapFilename: 'app.js.map',
        //chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /hello\.css$/, loader: 'raw' },
            { test: /material\.css$/, loader: 'style!css' },
            { test: /\.ts$/, loader: 'typescript-simple'},
            { test: /\.jpg$/, loader: 'file?name=[path][name].[ext]' },
            { test: /\.png$/, loader: 'url?mimetype=image/png' },
            { test: /\.html$/, loader: 'html' }
        ],
        noParse: [
          /rtts_assert\/src\/rtts_assert/
        ]
    },
    resolve: {
      extensions: ['', '.ts', '.js'],
    },
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("angular2", "angular2.js")
    ]
};
