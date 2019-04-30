const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.render('admin/category_list')
});

router.get('/add', function (req, res) {
    res.render('admin/category_add')
});

router.get('/edit', function (req, res) {
    res.render('admin/category_edit')
});


module.exports = router;
