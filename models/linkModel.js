// 1.连接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const linkSqlMap = require('../libs/linkSqlMap');

let linkModel = {
    linkList: function (data, callback) {
        pool.query(linkSqlMap.getLinkList,function (err,result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    linkEdit: function (data, callback) {
        pool.query(linkSqlMap.getEdit,data, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    saveEadit: function (data, callback) {
        pool.query(linkSqlMap.setEdit,[data.linkname,data.url,data.sort,data.describe,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    deleteLink: function (data, callback) {
        pool.query(linkSqlMap.delete,data.id, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    addLink: function (data,callback) {
        pool.query(linkSqlMap.addLink,[data.linkname,data.url,data.sort,data.describe], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    }
};

module.exports = linkModel;
