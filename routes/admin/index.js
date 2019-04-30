const express = require('express');
const router = express.Router();

// 引入各个模块的js文件
const user = require('./user');
const nav = require('./nav');
const category = require('./category');
const course = require('./course');
const system = require('./system');
const link = require('./link');

// 挂载模块
router.use('/user', user);
router.use('/nav', nav);
router.use('/category', category);
router.use('/course', course);
router.use('/system', system);
router.use('/link', link);

router.get('/', function (req, res) {
   res.render('admin/index')
});

// 导出对象
module.exports = router;
