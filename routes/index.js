var express = require('express');
var router = express.Router();
var users = require('./users');
var home_page = require('./home_page');
var chat_room = require('./chat_room');
/* GET home page. */
//总路由分析路径，分发给不同的路由
router.use('/users', users);//和用户相关，分发给用户的路由
router.use('/chat', chat_room);//和聊天相关，分发给聊天的路由
router.use('/home_page', home_page);//和首页相关，分发给首页的路由
module.exports = router;
