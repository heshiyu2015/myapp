var home_page_b = {

};

home_page_b.showHomepage = function(req, res, next) {
  res.render('index', { 
  	title : '肆意团练'
  });
};

module.exports = home_page_b;