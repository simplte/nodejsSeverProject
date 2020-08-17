### 会话编写时的问题
```
执行  yarn sequelize db:migrate 命令
向数据库写入表格结构时  一直报错  
解决办法：
根据控制台的报错信息肯定是 "sqlite3": "^5.0.0", 的问题
所以将git主中的package.json中的  sqlite3 依赖添加到本项目的package.json种
然后删除掉所有的依赖 通过 cpm i  命令重新装依赖  没有通过yarn 去装

后来还有一个问题 是报development环境的问题
解决办法 将 git主的migrate的session 实体赋值到本项目 中 重新执行 yarn sequelize db:migrate 就好了 很奇怪
```
### 认证登录时的问题
```
本次加入git第三方登录功能
出现如下问题：
注释掉 login中间件中的判断是否登录的处理则可以进入登录页面
现有问题：一次git授权登录之后就不能再次授权登录了
猜测原因：数据库中session表中  login为true
```
### 网络安全
```
1:跨站脚本攻击 xss
2:跨站请求伪造 csrf
yarn add escape-html csurf helmet # 本地安装 escape-html、csurf、helmet
装helmet时候因为装的版本是4.0.0+的所以一直浏览器控制台报错

本次处理都是使用cnpm装的包 现在实现了xss和csrf 防御

```
