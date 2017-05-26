var user_mongo = require('../data/user_mongo');

var users_b = {

}

users_b.sign_up = function (req, res, next) {
  user_mongo.createUser(req.body,function(result) {
  	res.write(JSON.stringify(result.ops[0]));
    res.end();
  });
}

users_b.login  = function (req, res, next) {

};

users_b.reply = function (req, res, next) {
  //res.render('index', { title: 'Users' });
  var data = {
    name : 'heshiyu'
  };
  console.log('这里收到了一个ajax的请求，我回复它一些测试数据');
  
  res.write(JSON.stringify(data));
  res.end();
}

users_b.reply_to_sam = function(req, res, next) {
  //res.render('index', { title: 'Hi Sam' });
}

module.exports = users_b;
