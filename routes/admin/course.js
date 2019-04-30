const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.render('admin/course_list')
});

router.get('/add', function (req, res) {
    res.render('admin/course_add')
});

router.get('/edit', function (req, res) {
    res.render('admin/course_edit')
});


module.exports = router;
