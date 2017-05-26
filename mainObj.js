/*
  封装网络连接关键对象
*/
var mainObj = {
  
};

mainObj.app = require('./app');

mainObj.http = require('http');

mainObj.server = mainObj.http.createServer(mainObj.app);

mainObj.io = require('socket.io')(mainObj.server);

module.exports = mainObj;