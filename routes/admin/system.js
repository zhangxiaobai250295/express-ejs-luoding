const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('admin/system_config')
});


module.exports = router;
