$(function(){
	for(var i=0;i<8;i++ ){
		$('.store').append('<li></li>');
	}	
	var arr = ['../img/img1.webp','../img/img2.webp','../img/img3.webp','../img/img4.webp','../img/img5.webp','../img/img6.webp','../img/img7.webp','../img/img8.webp',]
	$('.store>li').append('<img>')
	$('.store>li').find('img').map(function(){
		var num = $('.store>li>img').index($(this))
			$(this).attr({src:arr[num]})
	})

	$('.store>li').map(function(){
		var i = $('.store>li').index($(this))
		$('.store>li').eq(i).append('<p>成都玉林店</p>');
		$('.store>li').eq(i).append('<span>地址: 成都市武侯区玉林中路952#号</sapn>');
		$('.store>li').eq(i).append('<div>订餐电话: 010-55555225</div>');
	})
	
})