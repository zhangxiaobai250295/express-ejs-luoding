const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.render('admin/user_list')
});

router.get('/add', function (req, res) {
    res.render('admin/user_add')
});

router.get('/edit', function (req, res) {
    res.render('admin/user_edit')
});

router.get('/edit_pass', function (req, res) {
    res.render('admin/user_password_edit')
});

module.exports = router;
