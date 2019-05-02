const express = require('express');
const router = express.Router();
const courseModel = require('../../models/courseModel');
const result = require('../../libs/result');

router.get('/list', function (req, res) {
    courseModel.courseList(req, function (data) {
        // console.log(data);
        if (data.length !== 0) {
            res.render('admin/course_list',{
                data: data
            })
        }
    })
    // res.render('admin/course_list')
});

router.get('/add', function (req, res) {
    res.render('admin/course_add')
});
router.post('/course_add', function (req, res) {
    courseModel.addCourse(req.body, function (data) {
        if (!data) {
            res.json(result.createResult('success', '课程添加成功'));
        }
    })
});


router.get('/edit/:id', function (req, res) {
    // res.render('admin/course_edit')
    courseModel.courseEdit(req.params.id, function (data) {
        if (data) {
            res.render('admin/course_edit', {
                data: data
            })
        }
    })
});
router.post('/edit_save', function (req, res) {
    // res.render('admin/course_edit')
    courseModel.saveEadit(req.body, function (data) {
        // console.log(data);
        if (!data) {
            res.json(result.createResult('success', '课程编辑成功'));
        }
    })
});

router.get('/delete', function (req, res) {
    courseModel.deleteCourse(req.query, function (data) {
        if (!data) {
            res.json(result.createResult('success', '删除课程成功'));
        }
    })
});

module.exports = router;
