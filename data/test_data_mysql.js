var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({    

    host     : '127.0.0.1',       //主机
    user     : 'root',            //MySQL认证用户名
    password:'528577aA',
    port:   '3306',
    database: 'users'

});

//进行connection
connection.connect(function(err){

    if(err){       

        console.log('[query] - :'+err);

        return;

    }

    console.log('[connection connect]  succeed!');

}); 

//执行SQL语句
connection.query('SELECT * FROM chat_users', function(err, rows, fields) {

    if (err) {

        console.log('[query] - :'+err);

        return;

    }

    //console.log('The solution is: ', rows[0].solution); 
    console.log(rows);//试着打印结果

}); 


//关闭connection
connection.end(function(err){

    if(err){       

        return;

    }

    console.log('[connection end] succeed!');

});