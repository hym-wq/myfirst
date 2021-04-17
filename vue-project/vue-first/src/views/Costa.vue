<template>
	<div class="Costa">
		<div class="top">
			<img class="bg" :src="place[index].path" alt="">
			<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
			
			<p class="title">Costa Rica Tours</p>
			<van-button>Buy</van-button>
			<p class="areaname">{{place[index].placeName}}</p>
			<img class="dw" src="../assets/img/dw.svg" alt="">
			<span class="area">{{place[index].place_num}}</span>
			<img class="rl"src="../assets/img/rl2.svg" alt="">
			<h6>{{place[index].time}}</h6>
			<h5>from {{place[index].value}}</h5>
			<div class="round"><img src="../assets/img/jh.png" alt=""></div>
		</div>
		
		<ul class="left" >
			<li><img src="../assets/img/dian2.svg" alt=""></li>
		</ul>
		<ul class="list">
			<li><h6>TRIP TYPE</h6><p>Small Group</p><img src="../assets/img/Fill1.svg" alt=""></li>
			<li><h6>DEPARTURE / RETURN</h6><p>Playa del Carmen - San José</p><img src="../assets/img/Fill2.svg" alt=""></li>
		</ul>
		<div class="show">
			<span><h6>1</h6> <p>Day</p><h5>Playa del Carmen</h5></span>
			<h4>Check into our hotel and enjoy the city. Additional Notes: Shuttles and buses from the Cancún airport are easy to find and reasonably priced.</h4>
		</div>
		<div class="show">
			<span><h6>2-3</h6> <p>Day</p><h5>Playa del Carmen/Caye Caulker</h5></span>
			<h4>Check into our hotel and enjoy the city. Additional Notes: Shuttles and buses from the Cancún airport are easy to find and reasonably priced.</h4>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {Button} from 'vant';
	import {mapState} from 'vuex';
	Vue.use(Button);
	export default{
		data(){
			return{
				index:this.$route.params.index,
			}
		},
		computed:({
			...mapState({
				place:'popular_places'
			})
		}),
		methods:{
			Back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.Costa{
		
		@height:64px;
		.top{width: 100%;height:243px;position: relative;
		.bg{width: 100%;height:243px;}
			.van-button{position: absolute;width: 43px;height:26px;top: 12px;right:45px;background-color: rgba(255, 191, 68, 1);border-radius: 3px;border: none;
			font-size: 12px;line-height:25px;color: rgba(255,255,255,1);}
				p.areaname{width: 269px;height:auto;position: absolute;top:65px;left:55px;color: rgba(255, 255, 255, 1);font-size: 26px;letter-spacing: -1px;text-align: left;word-break: break-all;}
				.dw{width: 9px;height: 13px;position: absolute;left:55px;top: 142px;}
				span.area,h6{position: absolute;left:70px;top: 138px;color:rgba(255, 255, 255, .5);font-size: 11px;}
				.rl{width: 13px;height: 14px;position: absolute;left:130px;top:142px;}
				h6{left:150px ;top: 140px;}
				h5{color: white;position: absolute;left: 55px;bottom:50px;}
				.round{width:30px;height:30px;background-color: rgba(255, 255, 255, .5);border-radius: 50%;line-height:24px;position: absolute;right: 20px;bottom:40px;
					img{width:25px;vertical-align: middle;}
				}
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		
		p.title{margin: 0 auto;font-size: 12px;color: white;text-align: center;line-height:45px;font-weight: 500;}
		}
		.left{position: absolute;top:8px;right:13px;}
		.left>li{float: right;margin-right:0px;
					img{width:20px;};
		}
		
		
		.list{
			margin-top: 20px;
			li:nth-of-type(1){border-bottom:none ;}
			li{margin:0px auto;position: relative;width: 90%;height:@height;border: 1px solid rgba(230, 230, 230, .4);text-align: left;overflow: hidden;
				h6{color:rgba(170, 166, 162, .8);font-size:8px;margin-top: 5px;margin-left:15px}
				p{color: rgba(90, 75, 65, 1);font-size: 11px;margin-top: 5px;margin-left:15px}
				img{width: 27px;height: 27px;position: absolute;right: 20px;top: @height/4;}
			}
		}
		.show{width: 90%;height:120px;margin:10px auto;	text-align: left;position: relative;padding-bottom:20px;
			span{display: inline-block;width:43px;height: 51px;background-color:rgba(245, 243, 241, 1);text-align: center;font-size: 14px;
					h6{margin-top: 5px;color: rgba(90, 75, 65, 1);}
					P{color: rgba(170, 166, 162, 1);font-size: 8px;margin-top: 2px;}
				}
			h5{font-size: 20px;font-weight: 500;position: absolute;top:5px;left:65px;color: rgba(90, 75, 65, 1);word-break:break-all;text-align: left;}
			h4{font-weight: 500;font-size: 11px;color: rgba(146, 132, 112, 1);margin-top:5px;}
		}
	}
	
</style>
