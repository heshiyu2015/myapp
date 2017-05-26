var connectMsg = require('./connect_mongo');

var user_mongo = {

};

var insertData = function(db, userdata, callback) {  
    //连接到表 userData
    var collection = db.collection('userData');
    //插入数据
    collection.insert(userdata, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

user_mongo.createUser = function (userdata,callback) {
	connectMsg.MongoClient.connect(connectMsg.DB_CONN_STR, function(err, db) {
		console.log("连接成功！");
		insertData(db, userdata, function(result) {
            callback(result);
		    db.close();
		});
	});
};

module.exports = user_mongo;
