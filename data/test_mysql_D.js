var mysql = require('mysql');
var DATABASE = "users";
var TABLE="chat_users"
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'528577aA',
    port:'3306',
    database: DATABASE
});

connection.connect();

var addVip = 'delete from chat_users where name = ?';
var param = ['DJxiaoyu'];
connection.query(addVip, param,function(error, result){
    if(error)
    {
        console.log(error.message);
    }else{
        console.log('affectedRows: '+result.affectedRows);
    }
});

connection.end();