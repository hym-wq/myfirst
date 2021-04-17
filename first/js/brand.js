$(function(){
	$('.header>ul>li').eq(2).hover(
	function(){
			$('.view').slideDown(500);
		},
	function(){
			$('.view').hide();
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
	
	$('.make').animate({height:'380px',marginTop:'100px',opacity:'1'},1500)
	 $('.bgimg>img').animate({left:'0'},1500)
	
	function resetTop(obj){
		$(document).scroll(function(){
			if($(document).scrollTop()>400){
				obj.animate({top:'0',opacity:'1'},1000)
			}
		})
	}
	resetTop($('.min-box>div'))
	resetTop($('.min-box>ul'))
})

