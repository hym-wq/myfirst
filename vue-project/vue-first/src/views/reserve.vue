<template>
	<div class="reserve">
		<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
			<img class="title" src="../assets/img/trave.svg" alt="">
			<div class="spa">
				<span></span>
			</div>
			<p class="title">Reserver</p>
			<!-- <h2>{{value}}</h2> -->
		<van-form @submit="onSubmit">
			<van-field 
			  v-model="Subscriber"
			  label="Name"
			  readonly
			/>
			

		 
			 <van-field
			   v-model="Phone"
			   label="Phone"
			   readonly
			   />
			   <van-field
			     v-model="roomname"
			     label = "Hotel"
			     readonly
			   />
			<van-field
			  v-model="value"
			  label = "Rooms"
			  readonly
			/>
			<van-field
			  v-model="Prices"
			  label = "Prices"
			  readonly
			/>
			<van-field
			  v-model="Peoples"
			  label = "Peoples"
			  type="number"
			  placeholder="入住人数"
			  :rules="[{ required: true, message: '请输入入住人数' }]"
			/>
			</van-form>
			<van-button class="reserve_Home" @click="reserve()" >Reservation</van-button>
			<p class="bottom">Click "Reservation" to reserve your preferred room</p>
			
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import {Field,Button,Form,Toast } from 'vant';
	import AeraInfo from "../common/area.js";
	import {mapState} from 'vuex';
	Vue.use(Toast);
	Vue.use(Field);
	Vue.use(Button);
	Vue.use(Form);
	export default{
		data(){
			return{
				Subscriber:JSON.parse(localStorage.getItem('loginUser'))[0].name,
				Phone:JSON.parse(localStorage.getItem('loginUser'))[0].username,
				Peoples:'',
				Prices:'',
				value:this.$route.params.value,
				roomname:this.$route.params.areaname
			}
		},
		methods:{
			Back(){
				this.$router.go(-1)
				
			},
			reserve(){
				if(this.Peoples!=''){
					var arr = []
					
					var obj = {
						Peoples:this.Peoples,
						Prices:this.Prices,
						value:this.value,
						roomname:this.roomname,
						show:true
					}
					// this.$store.state.Hotel.push(obj)
					// console.log(this.$store.state.Hotel)
					
					var a = JSON.parse(localStorage.getItem('loginUser'))[0] 
					// a.Hotel = this.$store.state.Hotel
					a.Hotel.push(obj)
					// console.log(a.Hotel)
					arr.push(a)
					
					localStorage.setItem("loginUser",JSON.stringify(arr))
					var users = JSON.parse(localStorage.getItem('user'))
					
					for(var i=0;i<users.length;i++){
						if(a.username = users[i].username){
							 users.splice(i,1,arr)
							 localStorage.setItem('user',JSON.stringify(arr))
						}
					}
						
						Toast({message: '预定成功',duration:1000,position:"bottom",forbidClick:true});
						this.$router.push('/order')
					}
			},
			onSubmit(values) {
			},
			
		
			
		},
		created(){
			var price = Number(this.$route.params.price)
			var value = Number(this.$route.params.value)
			
			this.Prices = '$' +  price * value
		},
		computed:{
		...mapState({
			Hotel:'Hotel'
			
		})
	},
}
</script>


<style lang="less" scoped>
	.reserve{
		position: relative;
			.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
				span{font:10px Microsoft YaHei;line-height:@height;}
				img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}
		}
		.van-field {width:320px;margin:20px auto;}
		.button(){width:300px;@height:34px;border-radius:6px;font:10px Microsoft YaHei;}
		.reserve_Home{.button();background-color:rgba(255, 191, 68, 1);color: #fff;margin-top: 10px;}
		p.bottom{color: rgba(170, 166, 162, 1);font: 11px Microsoft YaHei;margin:23px auto;width:240px;}
	}
</style>
