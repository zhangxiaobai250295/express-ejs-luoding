const express = require('express');
const router = express.Router();
const navModel = require('../../models/navModel');
const result = require('../../libs/result');

router.get('/list', function (req, res) {
    navModel.navList(req, function (data) {
        // console.log(data);
        if (data.length !== 0) {
            res.render('admin/nav_list',{
                data: data
            })
        }
    })
});

router.get('/edit/:id', function (req, res) {
    // console.log(req.params.id);
    // res.render('admin/nav_edit')
    navModel.navEdit(req.params.id, function (data) {
        if (data) {
            res.render('admin/nav_edit', {
                data: data
            })
        }
    })
});
router.post('/edit_save', function (req, res) {
    // console.log(req.body);
    navModel.saveEadit(req.body, function (data) {
        // console.log(data);
        if (!data) {
            res.json(result.createResult('success', '导航编辑成功'));
        }
    })
});

router.get('/delete', function (req, res) {
    navModel.deleteNav(req.query, function (data) {
        if (!data) {
            res.json(result.createResult('success', '导航删除成功'));
        }
    })
});

router.get('/add', function (req, res) {
    res.render('admin/nav_add')
});
router.post('/nav_add', function (req, res) {
    navModel.addNav(req.body, function (data) {
        if (!data) {
            res.json(result.createResult('success', '导航添加成功'));
        }
    })
});


module.exports = router;
