<template>
	<div class="hotels3">
		<ul class="left" >
			<li><img src="../assets/img/wode.svg" alt=""@click="toSetting()"></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
		</ul>
		
		
		<ul class="view_list" >
			<li v-for="Area in Area_arr">
				<img class="img_left" :src="Area.path1" alt="">
				<div class="rate">
					<van-rate v-model="Area.Rate" :size="10" void-color="#999" color="#000" readonly/><h6>{{Area.score}}</h6>
				</div>
				<p>{{Area.areaName}}</p>
				<img class="dw" src="../assets/img/dw.svg" alt="">
				<span>{{Area.num}}</span>
				<h5>{{Area.value}}</h5>
				
				
			</li>
		</ul>
		
	</div>
</template>

<script>
	import Vue from "vue";
	import {Rate} from 'vant';
	Vue.use(Rate);
	export default{
		name:'hotels3',
		data(){
			return{
				Area_arr: [{
						path1: require("../assets/img/hotels3.1.png"),
						areaName: "Millennium Dubai Airport Hotel ",
						num: "Dubai–Subway Away",
						value: "$75 p/night",
						Rate:4,
						score:8.2
					},
					{
						path1: require("../assets/img/hotels3.2.png"),
						areaName: "Ibis Deira City Cent",
						num: "Garhoud, Dubai",
						value: "$103 p/night",
						Rate:2,
						score:6.7
					},
					{
						path1: require("../assets/img/hotels3.3.png"),
						areaName: "Grand Hyatt Dubai",
						num: "Bur Dubai, Dubai",
						value: "$127 p/night",
						Rate:5,
						score:9.3
					},
					{
						path1: require("../assets/img/hotels3.4.png"),
						areaName: "Grand Hyatt Dubai",
						num: "Bur Dubai, Dubai",
						value: "$127 p/night",
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
	
	.hotels3{
		.left{position: absolute;top:9px;right:13px;}
		.left>li{float: right;margin-right:10px;
					img{width: 15px;};
		}
		.view_list {
			width:100%;
			li:nth-of-type(1){
				margin-left:20px;
			}
			li:nth-of-type(3){
				margin-top: 35px;
				margin-left: 20px;
			}
			li:nth-of-type(4){
				margin-top: -20px;
			}
			li {
				width: 45%;
				height:220px;	
				
				float: left;
				text-align: left;
				margin-top: 20px;
				
				.img_left {
					width: 141px;
					margin-left: 10px;
					border-radius: 5px;
				}
		
				p {
					margin-left: 10px;
					color:rgba(90, 75, 65, 1);
					font-size: 14px;
				}
		
				.dw {
					width: 10px;
					height: 14px;
					margin-left: 10px;
				}
		
				span {
					margin-left: 5px;
					font-size: 11px;
					color:rgba(170, 166, 162, 1);
				}
		
				h5 {
					font-size: 11px;
					color: rgba(90, 75, 65, 1);
					margin-left: 10px;
					font-weight: 500;
					margin-top: 3px;
				}
				.van-rate{
					margin-left: 10px;
				}
				.rate{position: relative;}
				h6{
					color: rgba(255, 191, 68, 1);
					font-size:12px;
					font-weight: 500;
					position: absolute;
					right:40px;
					top:3px;
					}
				}
			}
	}
	
</style>
