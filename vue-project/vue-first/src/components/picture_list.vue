<template>
	<div class="picture_list">
		<li class="word">Price: Low-High</li>
		<ul class="view_list" v-for="Area in Area_arr" >
			<li>
				<img class="bottom" :src="Area.path1" alt="">
				<p>{{Area.areaName}}</p>
				<img class="dw" src="../assets/img/dw.svg" alt="">
				<span>{{Area.num}}</span>
				<img class="rl" src="../assets/img/rl2.svg" alt="">
				<h6>{{Area.days}}</h6>
				<h5>{{Area.value}}</h5>
				<div class="round">
					<img src="../assets/img/jia.svg" alt="">
				</div>
				
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'word_list',
		data(){
			return{
			Area_arr:[
				{
					path1:require("../assets/img/bigimg1.png"),
					areaName:"Iconic Peru",
					num:"2 places",
					days:'4 days',
					value:"$3499"
				},
				{
					path1:require("../assets/img/bigimg2.png"),
					areaName:"Machu Picchu Advent…",
					num:"5 places",
					days:'8 days',
					value:"$1274"
				},
				{
					path1:require("../assets/img/bigimg3.png"),
					areaName:"Beijing to Hong Kong Expr…",
					num:"9 places",
					days:'11 days',
					value:"$1799"
				},
				{
					path1:require("../assets/img/bigimg4.png"),
					areaName:"Essential China",
					num:"4 places",
					days:'16 days',
					value:"$2699"
				},
				{
					path1:require("../assets/img/Rectangle5.png"),
					areaName:"Highlights of China",
					num:"2 places",
					days:'22 days',
					value:"$33	99"
				},
			]
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.picture_list{position: relative;width: 100%;
		.word{position: absolute;right:15px;font-size:9px!important;color: rgba(90, 75, 65,.7);line-height: 130%;top:-50px;}
		.view_list{
			width: 100%;
			li{width: 100%;height: 110px;margin-top:20px;position: relative;padding-bottom: 10px;
				img.bottom{width:320px;height:110px;border-radius: 5px;}
				p{position: absolute;top:18px;left:50px;color: white;font-size: 20px;}
				.dw{width: 10px;height: 14px;position: absolute;top:64px;left:50px;}
				span{position: absolute;top:60px;left:70px;font-size: 11px;color: rgba(170, 166, 162, 1);}
				.rl{width:13px;height: 13px;position: absolute;top:64px;left:140px;}
				h6{font-size: 11px;color: rgba(170, 166, 162, 1);position: absolute;top:60px;left:160px;font-weight: 500;}
				h5{font-size: 14px;color:white;position: absolute;bottom:13px;right:40px;font-weight: 500;}
				.round{width:26px;height: 26px;background-color: rgba(245, 243, 241, .4);
						border-radius: 13px;text-align: center;line-height:23px;position:absolute;right:40px;top:15px;
						img{width: 11px;height: 11px;vertical-align: middle;}
					}
			}
			
		}
		
	
	}
	
</style>
