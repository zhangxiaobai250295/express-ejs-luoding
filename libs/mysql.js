// 处理数据库连接

const mysql = require('mysql');
const config = require('config-lite')(__dirname); // 引入config-lite 读取配置文件
const pool = mysql.createPool(config.mysql);


module.exports = pool;
