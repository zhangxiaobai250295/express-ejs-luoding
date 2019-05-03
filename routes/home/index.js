const express = require('express');
const cookie = require('cookie');
const router = express.Router();
const userModel = require('../../models/userModel');
const navModel = require('../../models/navModel');
const systemModel = require('../../models/systemModel');
const categoryModel = require('../../models/categoryModel');
const linkModel = require('../../models/linkModel');
const courseModel = require('../../models/courseModel');
const result = require('../../libs/result');

router.get('/', function (req, res) {
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

// 处理注册逻辑
router.get('/getuser', function (req, res) {
   // res.send(req.query.email)
    userModel.findOne(req.query.email, function (data) {
        // console.log(data);
        if (data) {
            res.json(result.createResult('error', '邮箱已经存在'));
        } else {
            res.json(result.createResult('success', '可以注册'));
        }
    });
});
router.post('/register', function (req, res) {
    // console.log(req.body);
    userModel.register(req.body, function (data) {
        if (data) {
            res.json(result.createResult('success', '注册成功'));
        }
    })
});

// 处理登录逻辑
router.post('/login', function (req, res) {
    // console.log(req.body);
    userModel.login(req.body, function (data) {
        // console.log(data);
        if (data) {
            res.setHeader('Set-Cookie', cookie.serialize('isLogin', "true"));
            res.json(result.createResult('success', '登录成功'));
        } else {
            res.json(result.createResult('error', '用户名或者密码错误'));
        }
    })
});

router.get('/signin', function (req, res) {
    navModel.navList(req, function (nav) {
        systemModel.systemList(req,function (system) {
            linkModel.linkList(req, function (link) {
                res.render('home/login', {
                    nav: nav,
                    system: system,
                    link: link,
                })
            })
        })
    });
});

router.get('/signup', function (req, res) {
    navModel.navList(req, function (nav) {
        systemModel.systemList(req,function (system) {
            linkModel.linkList(req, function (link) {
                res.render('home/register', {
                    nav: nav,
                    system: system,
                    link: link,
                })
            })
        })
    });
});

router.get('/signout', function (req, res) {
    res.send('这是退出页')
});

router.get('/category/:categoryName', function (req, res) {
    navModel.navList(req, function (nav) {
        systemModel.systemList(req,function (system) {
            linkModel.linkList(req, function (link) {
                courseModel.getCategoryCourse(req.params.categoryName, function (course) {
                    categoryModel.getCategoryUrl(req.params.categoryName, function (url) {
                        // console.log(url);
                        res.render('home/foundation', {
                            nav: nav,
                            system: system,
                            link: link,
                            course: course,
                            categoryName: req.params.categoryName,
                            url: url
                        })
                    })
                })
            })
        })
    });
});


// router.get('/foundation', function (req, res) {
//     res.render('home/test')
// });
//
// router.get('/progress', function (req, res) {
//     res.render('home/progress')
// });
//
// router.get('/senior', function (req, res) {
//     res.render('home/senior')
// });
//
// router.get('/strengthen', function (req, res) {
//     res.render('home/strengthen')
// });
//
// router.get('/mobile', function (req, res) {
//     res.render('home/mobile')
// });
//
// router.get('/fullstack', function (req, res) {
//     res.render('home/fullStack')
// });

module.exports = router;
