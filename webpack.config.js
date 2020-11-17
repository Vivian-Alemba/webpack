const path=require("path")
// const ExamplePlugin=require("./pluginExample.js")
// const webpack=require("webpack")

module.exports={

    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
               
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource'

            },
            {
                        test:/\.css$/,
                        use:[
                            {
                                loader:"style-loader"
                            },
                            {
                                loader:"css-loader"
                            }
                        ]
                    }
        ]


        // rules:[
        //     {
        //         test:/\.js$/,
        //         use:"babel-loader"
        //     },
        //     {
        //         test:/\.css$/,
        //         use:[
        //             {
        //                 loader:"style-loader"
        //             },
        //             {
        //                 loader:"css-loader"
        //             }
        //         ]
        //     },
        //     {
        //         test:/\.jpeg$/,
        //         use:[
        //             {
        //                 loader:"url-loader",options:{
        //                     limit:10000
        //                 }
        //             }
        //         ]
        //     }
        // ]
    }
    // Plugins:[
    //     // new ExamplePlugin()
       

    // ]

}