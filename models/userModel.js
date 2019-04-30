// 专门用来处理和用户相关的  数据库操作

// 1.连接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const userSqlMap = require('../libs/userSqlMap');

let userModel = {
    findOne: function (email, callback) {
        pool.query(userSqlMap.getByEmail, email, function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result[0]);
        })
    }
};

module.exports = userModel;
