const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode:'development',
    entry: {
        bundle: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
       
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']

            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env'],
                    }
                }

            },
            /*{
                test: /\.(jpeg|giff|jpg|png)$/i,
                type: 'assets/resource',
            },
            {
                test: /\.svg$/i,
                type: 'assets/resourse',
            },*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename:'index.html',
            template: 'src/template.html',
            minify:{
                removeComments: true,
                collapseWhitespace: true
            }
        }),


        new CopyWebpackPlugin({
            patterns: [
            {
              from: path.resolve(__dirname, './src/assets/sounds/'),
              to: path.resolve(__dirname, './dist')
            },
            {
                from: path.resolve(__dirname, './src/styles/'),
                to: path.resolve(__dirname, './dist')
              },
            {
                from: path.resolve(__dirname, './src/assets/img'),
                to: path.resolve(__dirname, './dist')
              },
              {
                from: path.resolve(__dirname, './src/assets/favicon.ico'),
                to: path.resolve(__dirname, './dist')
              },
            ]
        }),
        
    ],

    
}