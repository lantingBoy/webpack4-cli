# ywspace-activities


### 测试环境打包 projectA 自动部署在oss
```
npm run test projectA
```

### 线上环境打包 projectA 自动部署在oss
```
npm run pro projectA 
```
### 关于cli3打包路径问题

在vue.config.js 中  添加 module.exports = {
                baseUrl: './'
              }

从 Vue CLI 3.3 起已弃用，请使用publicPath

### 关于区分测试环境和线上环境

https://blog.csdn.net/qq_37055675/article/details/85047451