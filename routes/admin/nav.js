const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.render('admin/nav_list')
});

router.get('/add', function (req, res) {
    res.render('admin/nav_add')
});

router.get('/edit', function (req, res) {
    res.render('admin/nav_edit')
});


module.exports = router;
