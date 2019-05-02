const express = require('express');
const router = express.Router();
// 引入返回语句格式
const result = require('../../libs/result');

// 引入相应处理数据的模块
const categoryModel = require('../../models/categoryModel');

router.get('/list', function (req, res) {
    categoryModel.categoryList(req, function (data) {
        if (data.length !== 0) {
            res.render('admin/category_list',{
                data: data
            })
        }
    })
});

router.get('/add', function (req, res) {
    res.render('admin/category_add')
});
router.post('/category_add', function (req, res) {
    categoryModel.addCategory(req.body, function (data) {
        if (!data) {
            res.json(result.createResult('success', '课程分类添加成功'));
        }
    })
});

router.get('/edit/:id', function (req, res) {
    categoryModel.categoryEdit(req.params.id, function (data) {
        if (data) {
            res.render('admin/category_edit',{
                data: data
            })
        }
    })
});
router.post('/edit_save', function (req, res) {
    categoryModel.saveEadit(req.body, function (data) {
        if (!data) {
            res.json(result.createResult('success','课程分类编辑保存成功'))
        }
    })
});

router.get('/delete', function (req, res) {
    categoryModel.delete(req.query, function (data) {
        if (!data) {
            res.json(result.createResult('success','课程分类删除成功'))
        }
    })
});


module.exports = router;
