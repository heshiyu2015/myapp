var mysql = require('mysql');
var DATABASE = "users";
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'528577aA',
    port:'3306',
    database: DATABASE
});
connection.connect();
var userSql = "update chat_users set sex = ? where id = ?";
var param = ['boy', 2];
connection.query(userSql, param, function (error, result) {
    if(error)
    {
        console.log(error.message);
    }else{
        console.log('affectedRows: ' + result.affectedRows);
    }
});
connection.end();