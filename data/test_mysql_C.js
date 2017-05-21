var mysql = require('mysql');
var DATABASE = 'users';
var TABLE='chat_users';

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'528577aA',
    port:'3306',
    database: DATABASE
});

connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

}); 

var addVip = 'insert into chat_users(name) values(?)';
var param = ['DJxiaoyu'];
connection.query(addVip, param, function(error, result){
    if(error)
    {
        console.log(error.message);
    }else{
    	//console.log(JSON.stringify(result));
        console.log('insert id: '+result.insertId);
    }
});

connection.end();