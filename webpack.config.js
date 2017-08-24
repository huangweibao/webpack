let path = require('path');
le HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    index:'index.js',
    home: 'home.js'
  },
  output: {
  //参数有 [id],----replaced by the id of the chunk
  //[name],--------replaced by the name of the chunk (or with the id when the chunk has no name)
  //[hash],--------replaced by the id of the chunk
  //[chunkhash]-------replaced by the hash of the compilation
    path： path.resolve(__dirname,'dist'),
    filename: 'js/[name]-[hash].js'
  },
  module:{
    loaders:[
      //test ------a condition that must by met
      //exclude------ a condition that must not be met
      //include -------an  array of paths of files where the imported files will be transformed by the loader
      //loader--------- a string of '!' separated loaders
      //loaders--------an array of loaders as string
      test: /\.jsx$/,
      include:[
        path.resolve(__dirname,'app/src'),
        path.resolve(__dirname,'app/test')
      ],
      loader: 'babel-loader'
    ]
  }
}
