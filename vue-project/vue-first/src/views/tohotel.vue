<template>
	<div class="tohotel">
		<div class="top">
			<img class="bg" :src="Area[index].path1" alt="">
			
			<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
			<ul class="right" >
				<li><img src="../assets/img/dian2.svg" alt=""></li>
			</ul>
			<p class="title">Deluxe Room</p>
			<div class="round">
				<img src="../assets/img/code.svg" alt="">
			</div>
		</div>
		<ul class="img_bottom">
			<li><van-stepper v-model="value" theme="round" button-size="24" disable-input/></li>
			<li><p>{{Area[index].value}}</p></li>
			<li><van-button :to="{name:'reserve',params:{value:this.value,price:this.num,areaname:Area[index].areaName}}">Reserve</van-button></li>
		</ul>
		<ul class="mess">
			<li><h6>ROOM SIZE</h6> <p>70 m²</p></li>
			<li><h6>BEDS</h6> <p>2 twin (90-130 cm wide)</p></li>
		</ul>
		<div class="Description">
			<h6>Description</h6>
			<p>Occupying floors 51-59, this spacious suite enjoys beautiful views of Bangkok City and Chao Phraya River. It includes an LCD TV, free soft drinks from the minibar and Nespresso coffee machine. A bathroom has a separate bathtub and luxurious bath toiletries. </p>
		</div>
		<ul class="bottom">
			<li><img src="../assets/img/bottom1.svg" alt=""><span>Balcony, City view</span></li>
			<li><img src="../assets/img/bottom2.svg" alt=""><span>Flat-screen TV </span></li>
			<li><img src="../assets/img/bottom3.svg" alt=""><span>Free Wi-Fi</span></li>
			<li><img class="last" src="../assets/img/bottom4.svg" alt=""><span>Air Conditioning</span></li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Stepper,Button } from 'vant';
	import {mapState} from 'vuex';
	Vue.use(Stepper);
	Vue.use(Button);
	export default{
		data(){
			return{
				 value: 1,
				 index:this.$route.params.id,
				 num:''
			}
		},
		methods:{
			Back(){
				this.$router.push('/Hotels')
			},			
		},
		created(){
			var reg =/[0-9]{2,}/;
			var num = reg.exec(this.Area[this.index].value) 
			
			this.num = num[0]
			
		},
		computed:{
			...mapState({
				Area:'Area_arr'
			})
		}
	}
</script>

<style lang="less" scoped>
	@import "../assets/css/tohotel.css";
	.tohotel{
		.top{width: 100%;height:243px;position: relative;
		.bg{width: 100%;height:243px;}
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		.right{position: absolute;top:9px;right:13px;}
		.right>li{float: right;margin-right:20px;
					img{width:20px;};
			}
		p.title{margin: -245px auto;font-size: 12px;color: white;text-align: center;line-height:45px;font-weight: 500;}
		.round{width: 34px;height: 34px;position: absolute;background-color: rgba(255,255,255,.3);
				right: 20px;bottom: 25px;line-height: 32px;border-radius: 50%;
				img{width: 15px;height: 15px;vertical-align: middle;}
			}
		}
		.img_bottom{width: 90%;height: 30px;margin: 15px auto;
			li{float: left;height: 30px;position: relative;
				p{line-height:30px;color:rgba(90, 75, 65, 1) ;font-size: 14px;}
				.van-button{height: 30px;top: 0px;position: relative;display: block;border: none;background-color: rgba(255, 191, 68, 1);color: rgba(255, 255, 255, 1);}
				.van-stepper{display: block;line-height: 30px;}
			}
			li:nth-of-type(2),li:nth-of-type(3){margin-left:35px;}
		}
		.mess{width: 90%;height:74px;margin: 0 auto;
			li{height:74px;float: left;text-align: left;border: 1px solid rgba(230,230,230,.7);box-sizing: border-box;padding-bottom: 10px;
				h6{color: rgba(170, 166, 162, 1);font-size: 8px;margin-top: 15px;margin-left: 10px; font-weight: 500;}
				p{color: rgba(90, 75, 65, 1);font-size: 11px;margin-top:5px;margin-left: 10px;}
			}
			li:nth-of-type(1){
				width:40%;
			}
			li:nth-of-type(2){
				width: 60%;
				border-left: none;
			}
		}
		.Description{
			width: 90%;height:auto;margin: 20px auto;
			h6{text-align: left;color: rgba(90, 75, 65, 1);font-size: 14px;}
			p{color: rgba(146, 132, 112, 1);font-size: 11px;word-break:break-all;text-align: left;margin-top: 10px;}
		}
		.bottom{width: 90%;height:auto;margin: 0 auto;text-align: left;
		
			li{width:45%;float: left;margin-left:10px;margin-top:20px;
				img{width: 16px;height: 15px;}
				span{color: rgba(170, 166, 162, 1);font-size: 11px;margin-left: 10px;}
			}
			
		}
	}
</style>
