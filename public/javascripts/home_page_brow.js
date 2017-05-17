var home_page_brow = {};

$('#LoginButton').click(function(){//添加登陆的功能
  /*$.get('http://localhost:3000/users',function(data,status){
    alert("Data: " + JSON.parse(data).name + "\nStatus: " + status);
  });*/
  home_page_brow.showLoginPage();
});

home_page_brow.showLoginPage = function() {
  $('.grayOne').css('display','block');//灰幕出现
  $('#homepage_body').css('background-color','#D0D0D0');//主页变灰并有透明效果
  $('#homepage_body').css('opacity','0.7');
};

home_page_brow.showLoginTable = function() {
  
}

window.home_page_brow = home_page_brow;