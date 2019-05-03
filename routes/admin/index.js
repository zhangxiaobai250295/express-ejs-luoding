const express = require('express');
const router = express.Router();
const cookie = require('cookie');

const navModel = require('../../models/navModel');
const systemModel = require('../../models/systemModel');
const categoryModel = require('../../models/categoryModel');
const linkModel = require('../../models/linkModel');

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
    if(cookie.parse(req.headers.cookie || '').isLogin === "true" ){
        res.render('admin/index')
    }else{
        res.render('admin/error')
    }
   // res.render('admin/index')
});
// var reg = /^\/admin/;
// if( reg.test(url_obj.pathname)){
//
//     return;
// }


router.get('/logout', function (req, res) {
    res.setHeader('Set-Cookie', cookie.serialize('isLogin', ""));
    // res.render('home/index')
    navModel.navList(req, function (nav) {
        systemModel.systemList(req,function (system) {
            linkModel.linkList(req, function (link) {
                categoryModel.categoryList(req, function (category) {
                    res.render('home/index', {
                        nav: nav,
                        system: system,
                        link: link,
                        category: category
                    })
                })
            })
        })
    });
});

// 导出对象
module.exports = router;
