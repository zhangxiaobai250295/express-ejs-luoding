const express = require('express');
const router = express.Router();
const linkModel = require('../../models/linkModel');
const result = require('../../libs/result');

router.get('/list', function (req, res) {
    linkModel.linkList(req, function (data) {
        // console.log(data);
        if (data.length !== 0) {
            res.render('admin/link_list',{
                data: data
            })
        }
    })
});

router.get('/add', function (req, res) {
    res.render('admin/link_add')
});
router.post('/link_add', function (req, res) {
    linkModel.addLink(req.body, function (data) {
        if (!data) {
            res.json(result.createResult('success', '链接添加成功'));
        }
    })
});


router.get('/edit/:id', function (req, res) {
    // res.render('admin/link_edit')
    linkModel.linkEdit(req.params.id, function (data) {
        if (data) {
            res.render('admin/link_edit', {
                data: data
            })
        }
    })
});
router.post('/edit_save', function (req, res) {
    console.log(req.body);
    linkModel.saveEadit(req.body, function (data) {
        // console.log(data);
        if (!data) {
            res.json(result.createResult('success', '友情链接编辑保存成功'));
        }
    })
});

router.get('/delete', function (req, res) {
    linkModel.deleteLink(req.query, function (data) {
        if (!data) {
            res.json(result.createResult('success', '链接删除成功'));
        }
    })
});

module.exports = router;
