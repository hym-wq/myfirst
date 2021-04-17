$(function(){
	//实现header动态的hover效果
	$('.header>ul>li').eq(2).hover(
	function(){
			$('.view').stop(true).slideDown(500);
		},
	function(){
			$('.view').stop(true).hide();
		}
	)
	
	
	//吸顶效果
	$(document).scroll(function(){
		if ($(document).scrollTop()>0){
			$('.header').css('position','fixed').css('top','0px').slideDown(1000);
			$('.main').css('margin-top','124px')
		} else{
			$('.header').css('position','relative');
			$('.main').css('margin-top','0px');
		}
	})
	//轮播图***************
	var i = 0;
	var n =true;
	var time  =setInterval(run,5000);
	$('.ban').mouseover(function(){
		clearInterval(time)
	})
	$('.ban').mouseout(function(){
		time = setInterval(run,5000);
	})
	function run(){
		$('.banner>img').eq(i).stop(true,true).animate({opacity:'0'}).siblings().animate({opacity:'1'},1000);
		i++;
		if(i == $('.banner>img').length){
			i=0;
		}
	}
	$('.next').click(function(){
		run();
	})
	$('.pre').click(function(){
		if(i==0){
			i = $('.banner>img').length;
		}
		$('.banner>img').eq(i-1).stop(true,true).animate({opacity:'0'}).siblings().animate({opacity:'1'},1000);
		i--;
	})
	//滑动轮播图******************************
	var timekind =  setInterval(run1,5000)
	var num = 0;
	function run1(){
		
		$('.food').stop(true,true).animate({left:-248*num+'px'},400,function(){
			if(num>2){
				num=0;
				$('.food').css('left','0xp')
			}
		})
		num++;
	}
	//tab效果
		$('.title>div').click(function(){
			$(this).css('color','#efefef').siblings().css('color','#b2b2b2');
			$('.kind>ul').eq($('.title>div').index($(this))).fadeIn().next().fadeOut();
			if ($('.title>div').index($(this))==1) {
				$('.soup>li').animate({marginTop:'0px',opacity:'1'},1000)
				$('.kind>ul').eq($('.title>div').index($(this))).fadeIn().prev().fadeOut();
			}
		})
	
	//从下往上浮动的效果函数
	 $('.food>li').map(function(){
		$(this).css('left',$(this).index()*248+'px')
	 })
	
	 function goTop(height,obj,num){
		 
		 $(document).scroll(function(){
			 
		 	if($(document).scrollTop()>height){
		 		 obj.map(function(){
		 			 $(this).delay( $(this).index()*130)
		 		 })
		 		obj.animate({marginTop:num+'px',opacity:'1'},800)
				// console.log(1)
			}
		 })
	 }
	 goTop(260,$('.food>li'),0)
	 goTop(1300,$('.advise>li'),100)
	 function goTop1(h,obj,m){
	 		 $(document).scroll(function(){
	 		 	if($(document).scrollTop()>h){
	 		 		 obj.map(function(){
	 		 			 $(this).delay( $(this).index()*130)
	 		 		 })
	 		 		obj.animate({top:m+'px',opacity:'1'},800);
	 		 	}
	 		 })
	 }
	 goTop1(800,$('.story>div>h3'),150)
	 goTop1(800,$('.story>div>p'),230)
	 goTop1(800,$('.story>div>div'),350)
	 
	 function resetHtml(height,obj,num,up){
		 console.log(1)
	 		 $(document).scroll(function(){ 
	 		 	if($(document).scrollTop()>height){
					var inHtml = Number(obj.html());
					
					if(inHtml<num){
					var time = setInterval(function(){
							obj.html(inHtml);
							if(inHtml>num){
								clearInterval(time)
								obj.html(inHtml+'+')
							}
							inHtml += up;
						},4)
					}
	 		 	}
	 		 })
	 }
	  resetHtml(950, $('.visitor>div>p').eq(0),1495,10)
	 resetHtml(950, $('.visitor>div>p').eq(1),775,5)
	  resetHtml(950, $('.visitor>div>p').eq(2),164,1)
	
	 
	
	// var l =0;
	// $('.advise>li').mouseenter(function(){
			
	// 	$('.advise>li:eq(0)>div>a').css('color','red')
			
	// })
	//新闻动态模块效果
	$('.advise>li').map(function(){
		$(this).hover(
			function(){
				$(this).find('span').css('color','#ffffff');
				$(this).find('p').css('color','#ffffff');
				$(this).find('div').css('color','#ffffff');
				$(this).find('.libox').stop(true,true).animate({top:'-20px'}).end().find('.bgimg').stop(true,true).animate({opacity:'1'});
				$(this).find('.rimg').stop(true,true).animate({left:'200px',opacity:'1'}).end().find('.right').stop(true,true).animate({opacity:'1'});
			},
			function(){
				$(this).find('span').css('color','#DBDBDB');
				$(this).find('p').css('color','#999999');
				$(this).find('div').css('color','#999999');
				$(this).find('.libox').stop(true,true).animate({top:'20px'}).end().find('.bgimg').stop(true,true).animate({opacity:'0'});
				$(this).find('.rimg').stop(true,true).animate({left:'260px',opacity:'0'}).end().find('.right').stop(true,true).animate({opacity:'0'});
			}
					
		)
			
	})
	
	//左移效果
	$(document).scroll(function(){
		if($(document).scrollTop()>2000){
			$('.joinUs').animate({right:'0px'},950);
		}
	})
	//***************************
	function show(obj){
		$(document).scroll(function(){
			if($(document).scrollTop()>2600){
				obj.animate({opacity:'1',},1500,function(){
					$(this).delay(1000);
				});
			}
		})
	}
	show($('.team>h3'));
	show($('.team>h3>span'));
	show($('.team>p'));
	goTop(3600,$('.video>li'),60)
	$('.video>li').hover(
		function(){
			$(this).find('div').stop(true).animate({width:'250px',height:'80px',opacity:'1'},500)
			$(this).find('p').stop(true).animate({opacity:'1'},800)
			$(this).find('p').css('color','#ffffff')
		},
		function(){
			$(this).find('div').stop(true).animate({width:'300px',height:'150px',opacity:'0'},500)
			$(this).find('p').stop(true).animate({opacity:'0'},800)
			$(this).find('p').css('color','#b2b2b2')
		}
	)
	
	if(window.name == ""){

	 window.name = "isReload"; // 在首次进入页面时我们可以给window.name设置一个固定值 
	}else if(window.name == "isReload"){
	//往上浮动
	 function goTop(height,obj,num){
	 		 	if($(document).scrollTop()>height){
	 		 		 obj.map(function(){
	 		 			 $(this).delay( $(this).index()*130)
	 		 		 })
	 		 		obj.animate({marginTop:num+'px',opacity:'1'},800)
	 		 }
	 }
	 goTop(260,$('.food>li'),0)
	 goTop(1300,$('.advise>li'),100)
	 goTop(3600,$('.video>li'),60)
	 function goTop1(h,obj,m){
	 	if($(document).scrollTop()>h){
	 		 obj.map(function(){
	 		 	$(this).delay( $(this).index()*130)
	 		 })
	 		obj.animate({top:m+'px',opacity:'1'},800);
	 	}
	 }
	 goTop1(800,$('.story>div>h3'),150)
	 goTop1(800,$('.story>div>p'),230)
	 goTop1(800,$('.story>div>div'),350)
	}
	 function resetHtml1(height,obj,num,up){
	 		 	if($(document).scrollTop()>height){
					var inHtml = Number(obj.html());
					if(inHtml<num){
					var time = setInterval(function(){
							obj.html(inHtml);
							if(inHtml>num){
								clearInterval(time)
								obj.html(inHtml+'+')
							}
							inHtml += up;
						},4)
					}
	 		 	}
	 }
	resetHtml1(950, $('.visitor>div>p').eq(0),1495,10)
	resetHtml1(950, $('.visitor>div>p').eq(1),775,5)
	resetHtml1(950, $('.visitor>div>p').eq(2),164,1)
	
	 if ($(document).scrollTop()>0){
	 	$('.header').css('position','fixed').css('top','0px').slideDown(1000);
	 	$('.main').css('margin-top','124px')
	 } else{
	 	$('.header').css('position','relative');
	 	$('.main').css('margin-top','0px');
	 }
	
	 //左移效果
	 if($(document).scrollTop()>2000){
	 	$('.joinUs').animate({right:'0px'},950);
	 }
	
})
