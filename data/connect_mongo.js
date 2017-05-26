var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/chatroom'; // 数据库为 chatroom

module.exports = {
  MongoClient : MongoClient,
  DB_CONN_STR : DB_CONN_STR
};