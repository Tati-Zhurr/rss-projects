const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin =require("mini-css-extract-plugin");



module.exports = {
    mode:'production',
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
                test:/\.s(a|c)ss$/,
                use:['style-loader','css-loader', 'resolve-url-loader','sass-loader']
               /*use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']*/

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
                test: /\.(jpeg|giff|jpg|png|svg)$/i,
                type: 'assets/resource'
               
                
            },*/
            /*{
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

        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename:'donate.html',
            template: 'src/templateDonate.html',
            minify:{
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        /*new MiniCssExtractPlugin({
            filename:'[name][contenthash].scss'
        })*/

       new CopyWebpackPlugin({
            patterns: [
           /* {
              from: path.resolve(__dirname, './src/assets/sounds/'),
              to: path.resolve(__dirname, './dist')
            },
            {
                from: path.resolve(__dirname, './src/styles/'),
                to: path.resolve(__dirname, './dist/styles/')
              },*/
            /* {
                from: path.resolve(__dirname, './src/assets/img/'),
                to: path.resolve(__dirname, './dist/img/')
              },*/
              {
                from: path.resolve(__dirname, './src/assets/svg/'),
                to: path.resolve(__dirname, './dist/')
              }
            ]
        })
        
    ]

    
}