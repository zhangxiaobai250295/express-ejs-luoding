const express = require('express');
const router = express.Router();
const userModel = require('../../models/userModel');
const result = require('../../libs/result');

router.get('/list', function (req, res) {
    userModel.userList(req, function (data) {
        // console.log(data);
        res.render('admin/user_list', {
            data: data
        })
    });
});

router.get('/add', function (req, res) {
    res.render('admin/user_add')
});
router.post('/user_add', function (req, res) {
    // console.log(req.body);
    userModel.userAdd(req.body, function (data) {
        if (data) {
            res.json(result.createResult('success', '保存成功'));
        }
    });
});

router.get('/edit/:id', function (req, res) {
    // console.log(req.params.id);
    userModel.getUserEdit(req.params.id, function (data) {
        // console.log(data);
        res.render('admin/user_edit',{
            data: data,
            id: req.params.id
        })
    });
});
router.get('/edit_save', function (req, res) {
    // console.log(req.query);
    userModel.saveEadit(req.query, function (data) {
        // console.log(data);
        if (!data) {
            res.json(result.createResult('success', '保存成功'));
        }
    })
});

router.get('/delete', function (req, res) {
    console.log(req.query);
    userModel.getDelete(req.query, function (data) {
        if (data) {
            res.json(result.createResult('success', '删除信息成功'));
        }
    })
    // res.render('admin/user_password_edit')
});


router.get('/edit_pass', function (req, res) {
    res.render('admin/user_password_edit')
});

module.exports = router;
