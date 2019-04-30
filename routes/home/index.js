const express = require('express');
const router = express.Router();
const userModel = require('../../models/userModel');
const result = require('../../libs/result');

router.get('/', function (req, res) {
   res.render('home/index')
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

router.get('/signin', function (req, res) {
    res.render('home/login')
});

router.get('/signup', function (req, res) {
    res.render('home/register')
});

router.get('/signout', function (req, res) {
    res.send('这是退出页')
});

router.get('/foundation', function (req, res) {
    res.render('home/foundation')
});

router.get('/progress', function (req, res) {
    res.render('home/progress')
});

router.get('/senior', function (req, res) {
    res.render('home/senior')
});

router.get('/strengthen', function (req, res) {
    res.render('home/strengthen')
});

router.get('/mobile', function (req, res) {
    res.render('home/mobile')
});

router.get('/fullstack', function (req, res) {
    res.render('home/fullStack')
});

module.exports = router;
