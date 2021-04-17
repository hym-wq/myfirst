<template>
  <div class="Loading">
		<div id="box_1">
			<img src="../assets/img/trave.svg" alt="">
		</div>
		<div class="logo">
			<img src="../assets/img/logo1.svg" alt="">
			<img src="../assets/img/logo1.svg" alt="">
			<img src="../assets/img/logo2.svg" alt="">
			<img src="../assets/img/logo3.svg" alt="">
			<div></div>
			<img src="../assets/img/logo4.svg" alt="">
			<img src="../assets/img/logo4.svg" alt="">
			<img src="../assets/img/logo5.svg" alt="">
			<img src="../assets/img/logo6.svg" alt="">
			<img src="../assets/img/logo6.svg" alt="">
			<img src="../assets/img/logo7-left.svg" alt="">
			<img src="../assets/img/logo7-right.svg" alt="">
			<img src="../assets/img/logo8-left.svg" alt="">
			<img src="../assets/img/logo8-right.svg" alt="">
			<img src="../assets/img/logo9.svg" alt="">
			<img src="../assets/img/logo10.svg" alt="">
			<img src="../assets/img/logo11.svg" alt="">
			<img src="../assets/img/logo11.svg" alt="">
			<img src="../assets/img/logo12.svg" alt="">
		</div>
		<div class="text">
			<p>Travel Easy with <br>Our App</p>
		</div>
		<p class="min-text"> Trave is your app which makes traveling with friends and family more fun!</p>
		<!-- <router-link to="/Login">goto</router-link> -->
  </div>
</template>

<script>
	import Vue from 'vue'
	export default{
		name:'Loading',
		data(){
			return{
				
			}
		},
		 mounted(){
			if(Boolean( localStorage.getItem('loginUser'))==false){
				this.$nextTick(()=>{
						setTimeout(()=>{
						this.$router.push('Login')
					},2000)
				})
			}else{
				this.$nextTick(()=>{
						setTimeout(()=>{
						this.$router.push('/Home')
					},3000)
				})
			}
			 	
			 
			
		},
		// created(){
		// 	// console.log(JSON.parse(localStorage.getItem('loginUser')))
		// 	if(Boolean(JSON.parse(localStorage.getItem('loginUser')))) {
				
		// 	}
		// }
	}
</script>


<style lang="less" scoped>
	.Loading{position: relative;}
	#box_1{
		width: 100%;
		@height:43px;
		line-height:@height;
		img{
			width: 55px;
			height: 17px;
			vertical-align: middle;
		}
	}
	.logo{
		width: 162px;
		height:195px;
		position: absolute;
		left:108px;
		top: 128px;
		img,div{position: absolute;}
		img:nth-child(1){
			width: 32px;
			left:37px;
		}
		img:nth-child(2){
			width: 32px;
			right:37px;
		}
		img:nth-child(3){
			width:130px;
			right:16px;
			top: 16px;
		}
		img:nth-child(4){
			width:97px;
			height: 8px;
			right:32px;
			top:32px;
		}
		div{
			width: 41px;
			height: 8px;
			left:61px;
			top:89px;
			color: rgba(255, 191, 68, 1);
			background-color: rgba(255, 191, 68, 1);
			font-size: 14px;
			line-height: 150%;
			text-align: center;
		}
		
		img:nth-child(6){
			width:24px;
			height: 45px;
			left: 41px;
			top: 73px;
		}
		img:nth-child(7){
			width:24px;
			height: 45px;
			right:41px;
			top:73px;
		}
		img:nth-child(8){
			width:8px;
			height:16px;
			left:41px;
			top:32px;
		}
		img:nth-child(9){
			width:8px;
			height:49px;
			left:24px;
			bottom:57px;
			z-index: -1;
		}
		img:nth-child(10){
			width:8px;
			height:49px;
			right:24px;
			bottom:57px;
			z-index: -1;
		}
		img:nth-child(11){
			width:32px;
			height:32px;
			left:0;
			bottom:33px;
		}
		img:nth-child(12){
			width:32px;
			height:32px;
			right:0;
			bottom:33px;
		}
		img:nth-child(13){
			width:32px;
			height:41px;
			left:0;
			bottom:0;
		}
		img:nth-child(14){
			width:32px;
			height:41px;
			right:0;
			bottom:0;
		}
		img:nth-child(15){
			width:113px;
			left:22px;
			bottom:0;
		}
		img:nth-child(16){
			width:81px;
			left:41px;
			bottom:0;
		}
		img:nth-child(17){
			width:8px;
			left:57px;
			bottom:25px;
		}
		img:nth-child(18){
			width:8px;
			right:57px;
			bottom:25px;
		}
		img:nth-child(19){
			width:81px;
			right:41px;
			bottom:33px;
		}
		
	}
	
	.text{width: 296px;height: 51px;position: absolute;top:405px;left:38px;text-align: center;
		color: rgba(90, 75, 65, 1);line-height: 120%;font: 20px Microsoft YaHei;}
	.min-text{width: 296px;height: 34px;line-height: 130%;font: 11px Microsoft YaHei;
		color: rgba(146, 132, 112, 1);position: absolute;top: 480px;left:45px;}
</style>