<template>
	<div class="hotels2">
		<ul class="left" >
			<li><img src="../assets/img/hotelss.svg" alt=""></li>
		</ul>
		<ul class="view_list" v-for="(Area,index) in Area_arr">
			<li>
				<router-link :to="{name:'tohotel',params:{id:index}}">
					<img class="img_left" :src="Area.path1" alt="">
					<p>{{Area.areaName}}</p>
					<img class="dw" src="../assets/img/dw.svg" alt="">
					<span>{{Area.num}}</span>
					<h5>{{Area.value}}</h5>
					<van-rate v-model="Area.Rate" :size="10" void-color="#aaa" color="#fff" readonly />
					<h6>{{Area.score}}</h6>
				</router-link>
				
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from 'vue';
	import { Rate } from 'vant';
	import {mapState} from 'vuex';
	Vue.use(Rate);
	export default{
		data(){
			return{
				name:'hotels2',
			}
		},
		computed:{
			...mapState({
				Area_arr:'Area_arr'
			})
		}
	}
</script>

<style lang="less" scoped>
.hotels2{
	.left{position: absolute;top:9px;right:13px;}
	.left>li{float: right;margin-right:10px;
				img{width: 15px;};
	}
	.view_list {
		width: 100%;
		
		li {
			width: 100%;
			height: 180px;
			// border-bottom: 1px solid rgba(180, 180, 180, .2);
			margin: 20px auto;
			// padding-bottom: 5px;
			text-align: left;
			position: relative;
			
			.img_left {
				width: 350px;
				height:180px;
				margin-left: 10px;
				border-radius: 5px;
			}
	
			p {
				position: absolute;
				top: 70px;
				left: 40px;
				color: rgba(255, 255, 255, 1);
				font-size: 14px;
			}
	
			.dw {
				width: 10px;
				height: 14px;
				position: absolute;
				top: 100px;
				left: 40px;
			}
	
			span {
				position: absolute;
				top:95px;
				left:60px;
				font-size: 11px;
				color:rgba(255, 255, 255, .5);
			}
	
			h5 {
				font-size: 11px;
				color: rgba(255, 255, 255, 1);
				position: absolute;
				bottom: 40px;
				left: 40px;
				font-weight: 500;
			}
			.van-rate{
				position: absolute;
				left: 40px;
				top: 20px;
			}
			h6{
				color: rgba(255, 191, 68, 1);
				font-size:16px;
				font-weight: 500;
				position: absolute;
				right:40px;
				top: 15px;
				}
			}
		}
}
</style>
