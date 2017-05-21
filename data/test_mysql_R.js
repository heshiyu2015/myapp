var mysql = require("mysql");
var DATABASE = "users";
var TABLE="chat_users"
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'528577aA',
    port:'3306',
});

connection.connect();
connection.query('use ' + DATABASE);
connection.query('select * from ' + TABLE, function(error, results, fields){
    if (error) {
        throw error;
    }
    if (results) {
        for(var i = 0; i < results.length; i++)
        {
            console.log('%s\t%s',results[i].id,results[i].name);
        }
    }
});

connection.end();