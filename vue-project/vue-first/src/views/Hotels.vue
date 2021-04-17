<template>
	<div class="Hotels">
		<div class="top">
			<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
			
			<p class="title">Hotels</p>
		</div>
		
		
		<div class="search" ref="search">
			<van-search v-model="value" placeholder="Search Tours" 
						disabled 
						background="rgba(251, 250, 248, 1)"
						input-align="center"/>
		</div>
		
		
		<div class="btn_box">
			<ul >
				<li class="left"><img src="../assets/img/btn1.svg" alt=""></li>
				<li class="mid_mid" ><router-link :to="{name:'hotels2'}"><img @click="tohotel2()"  src="../assets/img/btn3.2.svg" alt=""><img class="img_two" ref="hotels2"  @click="tohotel2()"  src="../assets/img/btn3.1.svg" alt=""></router-link></li>
				<li class="mid_left" ><router-link :to="{name:'hotels1'}"><img @click="tohotel1()" ref="hotels3" src="../assets/img/btn2.1.svg" alt=""><img  @click="tohotel1()"  class="img_two" ref="hotels4" src="../assets/img/btn2.2.svg" alt="" ></router-link></li>
				<li class="mid_right" ><router-link :to="{name:'hotels3'}"><img @click="tohotel3()" ref="hotels5" src="../assets/img/hotels3.svg" alt=""><img  @click="tohotel3()" class="img_two" ref="hotels6" src="../assets/img/hotels3.1.svg" alt="" ></router-link></li>
				<li class="word">Featured</li>
			</ul>
			
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Search } from 'vant';
	
	Vue.use(Search);
	export default{
		data(){
			return{
				value:''
			}
		},
		methods:{
			Back(){
				this.$router.push('/Home')
			},
			tohotel1(){
				this.$refs.hotels3.style.display = 'block'
				this.$refs.hotels2.style.display = 'none'
				this.$refs.hotels6.style.display = 'none'
				this.$refs.hotels4.style.display = 'none'
				this.$refs.search.style.display = 'block'
			},
			
			tohotel2(){
				this.$refs.hotels3.style.display = 'none'
				this.$refs.hotels2.style.display = 'block'
				this.$refs.hotels4.style.display = 'block'
				this.$refs.hotels6.style.display = 'none'
				this.$refs.search.style.display = 'none'
			},
			tohotel3(){
				this.$refs.hotels2.style.display = 'none'
				this.$refs.hotels3.style.display = 'none'
				this.$refs.hotels4.style.display = 'block'
				this.$refs.hotels6.style.display = 'block'
				this.$refs.search.style.display = 'block'
			},
			
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/Search.css";
	.Hotels{
		width: 100%;
		height: auto;
		position: relative;
		.top{width: 100%;height: 35px;border-bottom: 1px solid rgba(230, 230, 230,.5);padding-bottom: 20px;}
		// .search{margin-top: 20px;}
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		p.title{margin: 0 auto;font-size: 12px;color: rgba(90, 75, 65, 1);text-align: center;line-height:45px;font-weight: 500;}
		.spa{margin-top: 15px;}
		.btn_box{
			width: 100%;height:17px;padding:20px 0;position: relative;border-bottom: 1px solid rgba(245, 243, 241, 1);
			li{float:right;img{width: 18px;position: absolute;}}
			.left{margin-right:320px;img{width:16px;left:30px;}}
			.mid_left{margin-right: 18px;img{width:23px;top:15px;left:145px;};.img_two{top:15px;left:145px;display: none;}}
			.mid_mid{margin-right: 150px;img{width:25px;top:15px;left:178px;}.img_two{display:none;width:25px;top:15px;left:178px;}}
			.mid_right{margin-right: 18px;img{width:15px;top:20px;left:215px;};.img_two{display: none;width:15px;top:20px;left:215px;}}
			.word{margin-top: -2px;margin-right: 15px;font-size: 11px;}
		}
	}
</style>
