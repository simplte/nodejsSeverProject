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