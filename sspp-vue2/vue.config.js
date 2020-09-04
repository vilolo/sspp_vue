const webpack = require('webpack')
module.exports = {
    configureWebpack: {

        plugins: [

            new webpack.ProvidePlugin({

                $:"jquery",

                jQuery:"jquery",

                "windows.jQuery":"jquery"

            })

        ]

    },

    // runtimeCompiler: true,
    // publicPath: '/', // 设置打包文件相对路径
    // devServer: {
    //     // open: process.platform === 'darwin',
    //     // host: 'localhost',
    //     // port: 8071,
    //     // open: true, //配置自动启动浏览器
    //     proxy: {
    //         '/api': {
    //             target: 'http://demo.local/index.php/', //对应自己的接口
    //             changeOrigin: true,
    //             ws: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // },
    
}