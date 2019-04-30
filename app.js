const express = require('express');
const app = express();
const config = require('config-lite')(__dirname); // 引入config-lite 读取配置文件
const package = require('./package'); // 引入项目依赖包配置文件
const path = require('path');
const ejs = require('ejs');

const admin = require('./routes/admin'); // 引入后台相关的路由
const home = require('./routes/home'); // 引入前台相关的路由

app.set('engine views', path.resolve('views')); // 设置ejs模板目录
app.engine('html', ejs.__express); // 设置html后缀
app.set('view engine', 'html'); // 设置模板引擎

app.use('/admin', admin); // 使用admin路由
app.use('/', home); // 使用home路由
app.use(express.static(path.resolve('./public'))); // 加载静态文件中间件

// app.get('/', function (req, res) {
//    res.send('hello word')
// });

app.listen(config.port, function (err) {
   if (!err) {
       console.log(`${package.name} listening on ${config.port}`)
   }
});
