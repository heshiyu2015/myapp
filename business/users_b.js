var users_b = {

}

users_b.reply = function(req, res, next) {
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
