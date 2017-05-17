var express = require('express');
var router = express.Router();
var home_page_b = require('../business/home_page_b');

//这是首页的路由，处理首页的逻辑


router.use('/', home_page_b.showHomepage);

module.exports = router;