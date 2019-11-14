/**
 * Created by guoguanrong on 2019/3/19
 * 项目配置详情
 */
const conf = require('./config/projectConfig')
const Oss = require('./oss'); // 引入刚刚创建的oss.js文件
const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
const WebpackAliyunOss = require('webpack-aliyun-oss');
module.exports = {
    pages: conf.pages,
    lintOnSave: false,
    baseUrl: './',
    configureWebpack: config => { // 覆盖webpack默认配置的都在这里
        //生产and测试环境
        let pluginsPro = [
            //	Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
            // new BundleAnalyzerPlugin(),
            new WebpackAliyunOss({
                from: "./dist/**", // 上传那个文件或文件夹  可以是字符串或数组
                dist: "bxm-video/dev/h5-video/pro", // 需要上传到oss上的给定文件目录
                region: Oss.region,
                accessKeyId: Oss.accessKeyId,
                accessKeySecret: Oss.accessKeySecret,
                bucket: Oss.bucket,
                // test: true,
                setOssPath: filePath => {
                    // some operations to filePath
                    let index = filePath.lastIndexOf("dist");
                    let Path = filePath.substring(index + 4, filePath.length);
                    return Path.replace(/\\/g, "/");
                },

            }),

        ];
        let pluginsTest = [
            new WebpackAliyunOss({
                from: "./dist/**", // 上传那个文件或文件夹  可以是字符串或数组
                dist: "bxm-video/dev/h5-video/test", // 需要上传到oss上的给定文件目录
                region: Oss.region,
                accessKeyId: Oss.accessKeyId,
                accessKeySecret: Oss.accessKeySecret,
                bucket: Oss.bucket,
                // test: true,
                setOssPath: filePath => {
                    // some operations to filePath
                    let index = filePath.lastIndexOf("dist");
                    let Path = filePath.substring(index + 4, filePath.length);
                    return Path.replace(/\\/g, "/");
                },

            }),
        ]
        //开发环境
        let pluginsDev = [
            //移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
            new vConsolePlugin({
                filter: [], // 需要过滤的入口文件
                enable: true // 发布代码前记得改回 false,如果允许测试开发环境出现vconsole,可以选择不修改
            }),

        ];
        if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
            if (process.env.VUE_APP_FLAG === 'pro') {
                config.plugins = [...config.plugins, ...pluginsPro];
            } else {
                //test 测试环境
                config.plugins = [...config.plugins, ...pluginsTest];
            }

        } else {
            // 为开发环境修改配置...
            config.plugins = [...config.plugins, ...pluginsDev];
        }
    },

}