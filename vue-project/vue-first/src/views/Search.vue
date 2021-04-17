<template>
	<div class="search">
		<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
		<img class="title" src="../assets/img/trave.svg" alt="">
		<ul class="left">
			<li><img src="../assets/img/wode.svg" alt="" @click="toSetting()"></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
			
		</ul>
		
		<div class="spa">
			<span></span>
		</div>
		<p class="title">Search</p>
		
		<van-field
		  v-model="begin"
		  label="From"
		  label-align="left"
		  label-width="30px"
		/>
		<van-field class="field_two"
		  v-model="end"
		  label="To"
		  label-align="left"
		  label-width="30px"
		/>
		<div id="calendar">
			<van-field class="field_three"
			  v-model="date"
			  label="Dates"
			  label-align="left"
			  label-width="40px"
			  
			  />
			
			<img src="../assets/img/rl.svg" alt="" class="calendar " @click="show = true">
			<!-- <van-cell title="Dates" :value="date" @click="show = true"/> -->
			 <van-calendar v-model="show" type="range" @confirm="onConfirm" />
			
		</div>
		<van-field
		  v-model="audlts"
		  label="Adults"
		  label-align="left"
		  label-width="40px"
		  type="digit"
		/>
		<van-field
		  v-model="childrens"
		  label="Childrens"
		  label-align="left"
		  label-width="55px"
		  type="digit"
		/>
		<div class="radio">
			<van-radio-group v-model="radio" direction="horizontal">
			  <van-radio name="1" shape="square" checked-color="rgba(255, 191, 68, 1)"icon-size="16px">Train</van-radio>
			  <van-radio name="2" shape="square" checked-color="rgba(255, 191, 68, 1)"icon-size="16px">Cruise Ship</van-radio>
			  <van-radio name="3" shape="square" checked-color="rgba(255, 191, 68, 1)"icon-size="16px">Bus </van-radio>
			  <van-radio name="4" shape="square" checked-color="rgba(255, 191, 68, 1)"icon-size="16px"> Aircraft</van-radio>
			</van-radio-group>
		</div>
		<van-button class="Search_btn">Search</van-button>
	
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import {Field,Calendar,Cell,DropdownMenu, DropdownItem,Radio,RadioGroup,Button} from 'vant';
	Vue.use(Button);
	Vue.use(Radio);
	Vue.use(RadioGroup);
	Vue.use(DropdownMenu);
	Vue.use(DropdownItem);
	Vue.use(Calendar);
	Vue.use(Field);
	Vue.use(Cell);
	export default{
		data(){
			return{
			begin:'',
			end:'',
			Dates:'',
			audlts:'',
			childrens:'',
			date: '',
			show: false,
			radio: '1',
			}
		},
		methods:{
			Back(){
				this.$router.go(-1)
			},
			  formatDate(date) {
			      return `${date.getMonth() + 1}/${date.getDate()}`;
			    },
			    onConfirm(date) {
			      const [start, end] = date;
			      this.show = false;
			      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
			    },
			toSetting(){
				this.$router.push('/Setting')
			}
		}
	}
</script>

<style lang="less" scoped>
	@import  "../assets/css/Search.css";
	.search{
		width: 100%;
		height: 300px;
		position: relative;
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		.SideBar{width:17px;height:11px;position:absolute;top:16px;left:13px;}
		.left{position: absolute;top:9px;right:13px;}
		.left>li{float: right;margin-right:10px;
					img{width: 15px;};
		}
		.van-field{width:85%;height:50px;margin:20px auto;}
		.field_two{margin-top:20px;}
		
		
		
		#calendar{position:relative;
			.field_three{margin-top:20px;}
			.calendar{width:18px;position: absolute;right:40px;bottom:15px;}
		}
		.radio{width: 300px;height:auto;margin: 0 auto;
			.van-radio{margin:20px 0 0 20px;}
			.van-radio:nth-of-type(2){margin-left:93px;}
			.van-radio:nth-of-type(4){margin-left:103px;}
		}
		.button(){width:300px;@height:34px;border-radius:6px;font:10px Microsoft YaHei;}
		.Search_btn{.button();background-color:rgba(255, 191, 68, 1);color: #fff;margin-top:30px;}
		
		
	}
</style>
