<template>
	<div class="hotels1">
		<ul class="left" >
			<li><img src="../assets/img/wode.svg" alt="" @click="toSetting()"></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
			
		</ul>
		<ul class="view_list" v-for="Area in Area_arr">
			<li>
				<img class="img_left" :src="Area.path1" alt="">
				<p>{{Area.areaName}}</p>
				<img class="dw" src="../assets/img/dw.svg" alt="">
				<span>{{Area.num}}</span>
				<h5>{{Area.value}}</h5>
				<van-rate v-model="Area.Rate" :size="10" void-color="#aaa" color="#000"  readonly/>
				<h6>{{Area.score}}</h6>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Rate } from 'vant';
	Vue.use(Rate);
	export default{
		data(){
			return{
				name:'hotels1',
				Area_arr: [{
						path1: require("../assets/img/hotel1.png"),
						areaName: "Millennium Dubai Airport Hotel ",
						num: "Dubai – Subway Access",
						value: "$75 p/night",
						Rate:4,
						score:8.2
					},
					{
						path1: require("../assets/img/hotel2.png"),
						areaName: "Ibis Deira City Cent",
						num: "Garhoud, Dubai",
						value: "$103 p/night",
						Rate:2,
						score:6.7
					},
					{
						path1: require("../assets/img/hotel3.png"),
						areaName: "Grand Hyatt Dubai",
						num: "Bur Dubai, Dubai",
						value: "$127 p/night",
						Rate:5,
						score:9.3
					},
					{
						path1: require("../assets/img/hotel4.png"),
						areaName: "Sareeraya Villas & S",
						num: "Chaweng",
						value: "$25 p/night",
						Rate:4,
						score:8.6
					},
					{
						path1: require("../assets/img/hotel5.png"),
						areaName: "Samui Star Guesthous",
						num: "Bang Rak, Bangkok",
						value: "$127 p/day",
						Rate:5,
						score:9.3
					},
				]
			}
		},
		methods:{
			toSetting(){
				this.$router.push('/Setting')
			}
		}
	}
</script>

<style lang="less" scoped>
	.left{position: absolute;top:9px;right:13px;}
	.left>li{float: right;margin-right:10px;
				img{width: 15px;};
	}
	.view_list {
		width: 100%;
		
		li {
			width: 100%;
			height: 68px;
			border-bottom: 1px solid rgba(180, 180, 180, .2);
			margin: 30px auto;
			padding-bottom: 20px;
			text-align: left;
			position: relative;
	
			.img_left {
				width: 68px;
				height: 68px;
				margin-left: 20px;
				border-radius: 5px;
			}
	
			p {
				position: absolute;
				top: 0px;
				left: 100px;
				color: rgba(90, 75, 65, 1);
				font-size: 14px;
			}
	
			.dw {
				width: 10px;
				height: 14px;
				position: absolute;
				top: 27px;
				left: 100px;
			}
	
			span {
				position: absolute;
				top: 24px;
				left: 115px;
				font-size: 11px;
				color: rgba(170, 166, 162, 1);
			}
	
			h5 {
				font-size: 11px;
				color: rgba(90, 75, 65, 1);
				position: absolute;
				top: 50px;
				left: 100px;
				font-weight: 500;
			}
			.van-rate{
				position: absolute;
				right: 35px;
				bottom: 10px;
			}
			h6{
				color: rgba(255, 191, 68, 1);
				font-size:14px;
				font-weight: 500;
				position: absolute;
				right: 5px;
				bottom: 8px;
				}
			}
		}
	
</style>
