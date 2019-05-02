const express = require('express');
const router = express.Router();
const systemModel = require('../../models/systemModel');
const result = require('../../libs/result');

router.get('/', function (req, res) {
    // res.render('admin/system_config')
    systemModel.systemList(req, function (data) {
        // console.log(data);
        if (data) {
            res.render('admin/system_config',{
                data: data
            })
        }
    })
});

router.post('/edit_save', function (req, res) {
    // console.log(req.body);
    systemModel.saveEadit(req.body, function (data) {
        // console.log(data);
        if (!data) {
            res.json(result.createResult('success', '系统信息编辑成功'));
        }
    })
});


module.exports = router;
