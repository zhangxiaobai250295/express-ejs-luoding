// 1.连接数据库
const pool = require('../libs/mysql');
// 引入sql语句
const courseSqlMap = require('../libs/courseSqlMap');

let courseModel = {
    courseList: function (data, callback) {
        pool.query(courseSqlMap.getCourseList,function (err,result) {
            if (err) throw err;
            // console.log(result);
            callback(result)
        })
    },
    courseEdit: function (data, callback) {
        pool.query(courseSqlMap.getEdit,data, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    saveEadit: function (data, callback) {
        pool.query(courseSqlMap.setEdit,[data.coursename,data.url,data.category,data.number,data.status,data.id], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    deleteCourse: function (data, callback) {
        pool.query(courseSqlMap.delete,data.id, function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    },
    addCourse: function (data,callback) {
        pool.query(courseSqlMap.addCourse,[data.coursename,data.url,data.category,data.number,data.status], function (err, result) {
            if (err) throw err;
            // console.log(result[0]);
            callback(result[0])
        })
    }
};

module.exports = courseModel;
