// 1.连接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const navSqlMap = require('../libs/navSqlMap');

let navModel = {
    navList: function (data, callback) {
         pool.query(navSqlMap.getNavList,function (err,result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    navEdit: function (data, callback) {
        pool.query(navSqlMap.getEdit,data, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    saveEadit: function (data, callback) {
        pool.query(navSqlMap.setEdit,[data.navname,data.url,data.status,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    deleteNav: function (data, callback) {
        pool.query(navSqlMap.delete,data.id, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    addNav: function (data,callback) {
        pool.query(navSqlMap.addNav,[data.navname,data.url,data.status], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    }
};

module.exports = navModel;
