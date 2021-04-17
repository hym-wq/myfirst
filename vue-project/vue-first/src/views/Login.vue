<template>
  <div class="Login">
	<div class="img-box">
		<img src="../assets/img/trave.svg" alt="">
		<p>
			Most popular travel app for every day. Search tours, hotels, tickets and more things for travel.
		</p>
	</div>
	
	<div class="wrapper">
		<img src="../assets/img/wrapper.svg" alt="">
		<p>See Presentation</p>
	</div>
	<van-button class="email_Login" to="email_Login">Log ln</van-button>
	<div class="box_2"></div>
	<van-button class="email_Regist" to="email_Regist">Sign Up with Mobile Phone</van-button>
	<van-button class="facebook"><img src="../assets/img/face.svg" alt="">Facebook</van-button>
	<van-button class="twitter" ><img src="../assets/img/twitter.svg" alt="">Twitter</van-button>
  </div>
</template>

<script>

import Vue from 'vue'
import {Button} from 'vant'
Vue.use(Button)


export default {
  name: 'Login',
}
</script>


<style lang="less" scoped>
	.Login{
		position: relative;
		.img-box{
			margin-top: 104px;
			width: 100%;
			img{width:133px;height: 41px;}
			p{width: 226px;height:64px;margin:20px auto;color: rgba(170, 166, 162, 1);
				line-height: 140%;font: 14px Microsoft YaHei;text-align: center;letter-spacing: -1px;}
		}
		.wrapper{
			width:145px;
			height: 17px;
			margin: 30px auto;
			position: relative;
			img{width:16px;position: absolute;left: 0;}
			p{color:rgba(255, 191, 68, 1);font-size:11px;letter-spacing: 0px;
				line-height:130%;position: absolute;left:21px;top: 0;}
		}
		.button(){width:300px;@height:34px;border-radius:6px;font:10px Microsoft YaHei;}
		.email_Login{.button();line-height: 150%;color:#666;
					box-shadow: rgba(237, 233, 229, 1) solid 1px;margin: 30px 0 0 0 ;}
		.box_2{
			width: 300px;
			height: 1px;
			margin:40px auto;
			background-color: rgba(235, 230, 220, 1);
		}
		.email_Regist{.button();background-color:rgba(255, 191, 68, 1);color: #fff;margin-top: 10px;}
		.facebook{.button();background-color:rgba(59, 89, 152, 1);color: #fff;margin-top: 10px;
					img{width: 17px;height: 17px;position: absolute;left: 20px;}}
		.twitter{.button();background-color:rgba(85, 172, 238, 1);color: #fff;margin-top: 10px;
					img{width: 17px;height: 14px;position: absolute;left: 20px;}}
	}
	
</style>
