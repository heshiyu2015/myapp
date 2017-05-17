var express = require('express');
var router = express.Router();
var users_b = require('../business/users_b');
/* GET users listing. */
//用户路由根据不用路径调用业务层的不用方法

router.use('/Hi', users_b.reply_to_sam);
router.use('/', users_b.reply);
module.exports = router;
