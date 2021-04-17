<template>
	<div class="home">
		<img @click="showPopup" class="SideBar" src="../assets/img/SideBar.svg" alt="">
		<img class="title" src="../assets/img/trave.svg" alt="">
		<ul class="left">
			<li><img src="../assets/img/wode.svg" alt="" @click="toSetting()"></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
		</ul>

		<div class="spa">
			<span></span>
		</div>
		
		<div class="toWhere">
			<span>Where are you going?</span>
			<img src="../assets/img/ss.svg" alt="">
			<div class="spa">
				<span></span>
			</div>
		</div>
		<router-link class="popular" to="/Tours" >Popular Tours</router-link>
		<ul class="view">
			<li v-for="(place,index) in popular" >
				<router-link :to="{name:'Costa',params:{index:index}}">
					<img :src="place.path" alt="">
					<h6>{{place.placeName}}</h6>
					<p>{{place.place_num}}</p>
					<h5>{{place.time}}</h5>
					<span>{{place.value}}</span>
				</router-link>
				
			</li>
			
		</ul>
		<div class="bottom">
			
			<ul class="view">
				<router-link class="countries" to="po">Countries</router-link>
				<li v-for="(place,index) in countries_places">
					
					<img :src="place.path" alt="">
					<div>
						<h6>{{place.placeName}}</h6>
						<p>{{place.time}}</p>
					</div>
					
				</li>
				
			</ul>
		</div>
		
		
		
		
		
		<van-popup v-model="show" position="left" :overlay="true":overlay-style="{ backgroundColor:'rgba(230,230,230,.3)'}"	>
			<img src="../assets/img/tx.png" alt="">
			<p>{{name}}</p>
			<img src="../assets/img/dw.svg" alt="">
			<p>{{country}}-{{area}}</p>
			
			
			<router-link to="/Search">Search</router-link>
			<router-link to="/Tours">Tours</router-link>
			<router-link to="/Hotels">Hotels</router-link>
			<router-link to="/order">Orders</router-link>	
			
			
			<router-link to="/Setting">Settings</router-link>	
			<router-link to="Help">Help</router-link>	
			<van-button @click="outLogin">Log Out</van-button>	
		</van-popup>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import {mapMutations} from 'vuex';
	import { Popup,Cell,Form,Button} from 'vant';
	import {mapState} from 'vuex'
	Vue.use(Cell);
	Vue.use(Popup);
	Vue.use(Form);
	Vue.use(Button);
	export default{
		data(){
			return{
				show: false ,
				name:JSON.parse(localStorage.getItem('loginUser'))[0].name,
				country:JSON.parse(localStorage.getItem('loginUser'))[0].country,
				area:JSON.parse(localStorage.getItem('loginUser'))[0].Area,
				

				countries_places:[{
					path:require('../assets/img/cview1.png'),
					placeName:'India',
					time:'238 tours',
					
				},{
					path:require('../assets/img/cview2.png'),
					placeName:'Costa Rica',
					time:'17 tours',
					
				}
			],
			}
		},
		computed:{
			...mapState({
				popular:'popular_places'
			})
				
			
		},
		 methods: {
		    showPopup() {
		      this.show = true;
			 
		    },
			...mapMutations({
				toSetting:'toSetting'
			}),
			toSetting(){
				this.$router.push('/Setting')
			},
			Costa(){
				this.$router.push('/Costa')
			},
			outLogin(){
				localStorage.setItem("loginUser", "")
				
				this.$router.push('/Login')
			}
			
		  },
		  
	}
</script>

<style lang="less" scoped>
	@width:70%;
	.home{
		width: 100%;
		height: auto;
		position: relative;
		.SideBar{width:17px;height:11px;position:absolute;top:16px;left:13px;}
		.left{position: absolute;top:9px;right:13px;}
		.left>li{float: right;margin-right:10px;
				img{width: 15px;};
			}
		.toWhere{width: 269px;@height: 39px;margin:30px auto;line-height:@height;text-align:left;position: relative;
				span{color: rgba(170, 166, 162, 1);font: 20px Microsoft YaHei;}
				img{width: 15px;position: absolute;right: 0px;top:@height/3}
		}
		.popular,.countries{color: rgba(90, 75, 65, 1);font: 26px Microsoft YaHei;display:block;margin-left:40px;text-align: left;width:190px;height: auto;font-weight:600;}
		
		.view{width: 100%;
			li{float: left;padding-left:20px;text-align: left;margin-bottom:45px;position: relative;
				img{width:160px;height:119px;margin-top:15px;border-radius:5px;}}
				h6,p,span,h5{display: block;margin-top:10px;font-family: Microsoft YaHei;color: rgba(90, 75, 65, 1);font-size: 11px;}
				p,h5{color:rgba(170, 166, 162, 1)}
				h5{position: absolute;bottom:26px;left:90px;font-weight: 500;}
		}
		.bottom{.view{
			height: 154px;margin-top: 20px;
			li{position: relative;@height:154px;margin-bottom:20px;
			img{width: 154px;height: 154px;margin: 0 auto;}
			div{position: absolute;top:@height/4;left:10%;width: 90%;height:auto;text-align: center;
				h6{color: rgba(255, 255, 255, 1);font-size: 20px;}
				
				p{color:rgba(255, 255, 255, 1)}
			}
				
				}
			}
		}
		
		
		
		.van-popup{height:100%;width: @width;overflow-x: hidden;
			img:nth-child(1){width: 51px;margin:26px 125px 0 0;}
			p:nth-of-type(1){position: absolute;top:30px;right:85px;color: rgba(90, 75, 65, 1);font: 14px Microsoft YaHei;text-align: left;}
			img:nth-child(3){width:9px;position: absolute;top:60px;left:105px;}
			p:nth-of-type(2){position: absolute;top:56px;left:120px;color: rgba(170, 166, 162, 1);font:8px Microsoft YaHei;word-break:break-all;text-align: left;}
			.a(){display: block;width: 100%;margin:35px 0 0 40px;color:rgba(90, 75, 65, 1);font: 20px Microsoft YaHei;text-align: left;}
			a:nth-of-type(1){.a();margin-top:51px;}
			a{.a()}
			.a1(){display: block;width: 100%;margin-top:35px;color: rgba(90, 75, 65, 1);font: 14px Microsoft YaHei;}
			a:nth-of-type(5){.a1();margin-top: 119px;}
			a:nth-of-type(6),{.a1()}
			.van-button{border: none;margin:10px 130px 0 0 ;}
		}
	}
</style>
