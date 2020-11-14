const path = require('path')


module.exports={
    entry:['babel-polyfill','./src/index.js'],   //relative path
    output:{
        path:path.resolve(__dirname,'public/scripts'), //__dirname gives asbolutepath till current dir
        filename:'bundle.js'   //absolute path  
    },
    module: {
        rules:[{
            test:'/\.js$/',
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['env']
                }

            }

        }]

    },
    devServer:{
        contentBase:path.resolve(__dirname,'public'),
        publicPath:'/scripts/'
    },
    devtool:'source-map'

}

