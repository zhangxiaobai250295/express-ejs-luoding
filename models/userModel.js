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
    },
    register: function (data, callback) {
        pool.query(userSqlMap.register, [data.email, data.password], function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result);
        })
    },
    login: function (data, callback) {
        // console.log(data);
        pool.query(userSqlMap.login, [data.email, data.password], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0]);
        })
    },
    userList: function (data, callback) {
        pool.query(userSqlMap.getUserList, function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    userAdd: function (data, callback) {
        pool.query(userSqlMap.setUserAdd,[data.username,data.email,data.password,data.role,data.status], function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    getUserEdit: function (data, callback) {
        // console.log(data);
        pool.query(userSqlMap.getUserEdit, data, function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result[0]);
        })
    },
    saveEadit: function (data, callback) {
        pool.query(userSqlMap.getEditSave, [data.username,data.email,data.role,data.status,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0]);
        })
    },
    getDelete: function (data, callback) {
        pool.query(userSqlMap.delete,data.id, function (err,result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    }
};

module.exports = userModel;
