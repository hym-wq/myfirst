$(function(){
	$('.toleft').hover(
		function(){
			$('.toleft>h2').css('color','#c4c4c4')
			$('.toleft>a').css('color','#c4c4c4')
			$('.toleft>p').css('border-left','1px solid rgba(220,220,220,.4)')
			$('.toleft>p').stop(true).animate({paddingLeft:'30px'})
			$('.go').stop(true).animate({bottom:'10px',opacity:'1'},300)
			$('.toleft>span').stop(true).animate({bottom:'21px',opacity:'1'},300)
		},
		function(){
			$('.toleft>h2').css('color','#878787')
			$('.toleft>a').css('color','#898989')
			$('.toleft>p').css('border-left','none')
			$('.toleft>p').stop(true).animate({paddingLeft:'0'})
			$('.go').stop(true).animate({bottom:'-25px',opacity:'0'},300)
			$('.toleft>span').stop(true).animate({bottom:'30px',opacity:'0'},300)
		}
	)
	$('.innerdiv').hover(
		function(){
			$(this).stop().animate({marginLeft:'20px'});
			$(this).find('h2').css('color','#c4c4c4');
			$(this).find('.first').stop(true).animate({marginLeft:'30px'})
			$(this).find('.sec').stop(true).animate({left:'10px'})
		},
		function(){
			$(this).stop().animate({marginLeft:'0px'});
			$(this).find('h2').stop(true).animate({marginLeft:'0px'}).css('color','#c4c4c4');
			$(this).find('.first').stop(true).animate({marginLeft:'10px'})
			$(this).find('.sec').stop(true).animate({left:'-20px'})
		}
	)
	var num = 0;
	$('.page>span').click(function(){
		
		if($(this).index()==2){
			$('.action').css('display','block')
			$('.secAction').css('display','none')
			$(this).css({background:'#cc0e17',color:'#ffffff'}).siblings().css({background:'transparent',color:'#a3a3a3'})
		}else if($(this).index()==1){
			$('.action').css('display','none')
			$('.secAction').css('display','block')
			$(this).css({background:'#cc0e17',color:'#ffffff'}).siblings().css({background:'transparent',color:'#a3a3a3'})
		}else if($(this).index()==0){
			num +=1;
			if(num<2){
				$('.page>span').eq(num).css({background:'#cc0e17',color:'#ffffff'}).siblings().css({background:'transparent',color:'#a3a3a3'})
				$('.secAction').css('display','block')
				$('.action').css('display','none')
			}
			if(num>=2){
				num=0;
			}
		}else if($(this).index()==3){
			if(num>=1){
				$('.page>span').eq(num+1).css({background:'#cc0e17',color:'#ffffff'}).siblings().css({background:'transparent',color:'#a3a3a3'})
				$('.secAction').css('display','none')
				$('.action').css('display','block')
			}
			if(num>=2){
				num=0;
			}
		}
		
		
	
	
	})
	
	
	
})