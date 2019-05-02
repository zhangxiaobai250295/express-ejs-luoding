// 链接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const categorySqlMap = require('../libs/categorySqlMap');

let categoryModel = {
    categoryList: function (data, callback) {
        pool.query(categorySqlMap.getCategoryList,function (err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    categoryEdit: function (data, callback) {
        pool.query(categorySqlMap.getCategoryEdit,data, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    saveEadit: function (data, callback) {
        // console.log(data);
        pool.query(categorySqlMap.setEdit,[data.categoryname,data.sort,data.status,data.imgurl,data.describe,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    delete: function (data, callback) {
        pool.query(categorySqlMap.delete, data.id, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    addCategory: function (data, callback) {
        // console.log(data);
        pool.query(categorySqlMap.addCategory,[data.categoryname,data.sort,data.status,data.imgurl,data.describe], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    }
};

module.exports = categoryModel;
