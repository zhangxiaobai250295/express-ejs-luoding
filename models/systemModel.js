// 1.连接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const systemSqlMap = require('../libs/systemSqlMap');

let systemModel = {
    systemList: function (data, callback) {
        pool.query(systemSqlMap.getSystemList,function (err,result) {
            if (err) throw err;
            // console.log(result);
            callback(result[0])
        })
    },
    // navEdit: function (data, callback) {
    //     pool.query(navSqlMap.getEdit,data, function (err, result) {
    //         if (err) throw err;
    //         // console.log(result[0]);
    //         callback(result[0])
    //     })
    // },
    saveEadit: function (data, callback) {
        pool.query(systemSqlMap.setEdit,[data.title,data.subheading,data.describe,data.logo,data.adminEmail,data.wechatLogo,data.copyright,data.info,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    }
    // deleteNav: function (data, callback) {
    //     pool.query(navSqlMap.delete,data.id, function (err, result) {
    //         if (err) throw err;
    //         // console.log(result[0]);
    //         callback(result[0])
    //     })
    // },
    // addNav: function (data,callback) {
    //     pool.query(navSqlMap.addNav,[data.navname,data.url,data.status], function (err, result) {
    //         if (err) throw err;
    //         // console.log(result[0]);
    //         callback(result[0])
    //     })
    // }
};

module.exports = systemModel;
