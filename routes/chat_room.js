var express = require('express');
var router = express.Router();
var chat_room_b = require('../business/chat_room_b');

router.use('/', chat_room_b.showChatpage);

module.exports = router;
