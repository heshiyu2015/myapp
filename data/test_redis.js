var redis   = require('redis');
var client  = redis.createClient('6379', '127.0.0.1');//端口号和连接

// redis 链接错误,打印日志
client.on("error", function(error) {
    console.log(error);
});

// redis 验证 (reids.conf未开启验证，此项可不需要)
//client.auth("foobared");

client.set("string key", "string val", redis.print);//set "string key" "string val"  
/* 
    redis.print，回调函数，将redis的返回值显示出来。上一句执行结果，将返回“OK”  
*/  
client.get("string key", function(err,res){
  if (err) 
  	console.log(err);
  else {
  	console.log('string key 的值为' + res);
  }
});
client.hset(["hash key", "hashtest 1", "some value"], redis.print);  

client.hkeys("hash key", function (err, replies) {  
    console.log(replies.length + " replies:");  
    replies.forEach(function (reply, i) {  
        console.log("    " + i + ": " + reply);  
    });  
client.hget("hash key","hashtest 1",redis.print);

client.hset(["hash key", "hashtest 1", "some value"], redis.print); //同key同val
client.hset(["hash key", "hashtest 1", "some value2"], redis.print); //同key不同val
client.hset(["hash key", "hashtest 2", "some value"], redis.print); //不同key同val

client.quit();  

}); 