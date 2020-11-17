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
                test:/\.jpe?g$/,
                use:[
                    {loader:"file-loader"}
                    // {loader:"image-webpack-loader",options:{

                    // }}
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