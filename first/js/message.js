$(function(){

	$(".btn").click(function(){
	
		// var options=$(".city>option:selected"); 
		// alert(options.val()); 
		if($('#name').val()==''){
			$('.message>div').eq(0).css('display','block').css('width','100%');
		}
		
		if($('#phone').val()==''&&$('#home').val()!=''){
			$('.message>div').eq(1).css('display','block').css('width','100%');
		}

		if($('#home').val()==''&&$('#phone').val()!=''){
			$('.message>div').eq(2).css('display','block').css('width','100%');
			$('.message>div').eq(2).find('span').css('marginLeft','50%')
		}
		if($('#home').val()==''&&$('#phone').val()==''){
			$('.message>div').eq(1).css('display','block');
			$('.message>div').eq(2).css('display','block');
		}
		var pattern = /^[\u4e00-\u9fa5]{2,12}$/;
		var nameend = pattern.test($('#name').val())
		
		
		var pattern1 = /^\d{11}/;
		var phoneend = pattern1.test($('#phone').val())
		
		
	
		var pattern2 = /^[\u4e00-\u9fa5]{5,20}$/;
		var homeend = pattern2.test($('#home').val())
		
		
		if(nameend==true&& phoneend==true &&homeend==true ){
			$('.message>div').css('display','none').css('width','50%');
			$(" input[ type='text' ] ").val("")
			$(" select ").val("北京")
			
			$('.tipBox').fadeIn(500);
			setTimeout(function(){
				$('.tipBox').fadeOut(800);
			},2300)
		}
		
			
	})
	
	$(".message").citySelect({
	    url:"../js/city.min.js",   
	    prov:"北京",  
	    city:null,  
	    dist:null,
		nodata:true,
	});
})