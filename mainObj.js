var mainObj = {
  
};

mainObj.app = require('./app');

mainObj.http = require('http');

mainObj.server = mainObj.http.createServer(mainObj.app);

mainObj.io = require('socket.io')(mainObj.server);

module.exports = mainObj;