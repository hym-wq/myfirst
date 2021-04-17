<template>
	<div class="order">
		<div class="back"type='submit' @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
		<p class="title">Order</p>
		<ul class="right" >
			<li><img src="../assets/img/wode.svg" alt="" ></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
		</ul>
		<ul class="orders">
			<li v-for="(order,index) in order">
				<h6>Hotel: {{order.roomname}}</h6>
				<p>Rooms: {{order.value}}</p>
				<p>Peoples: {{order.Peoples}}</p>
				<p>Prices: {{order.Prices}}</p>
				<van-button  @click="cancel(index)">cancel</van-button>
			</li>
			<!-- <li>
						<p>Peoples:this.Peoples,Prices:this.Prices,
						value:this.value,
						roomname:this.roomname,</p>
						
			</li>
			<li>
						<p>Peoples:this.Peoples,Prices:this.Prices,
						value:this.value,
						roomname:this.roomname,</p>
						
			</li> -->
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {Button,Toast} from 'vant';
	Vue.use(Button);
	Vue.use(Toast);
	export default{
		data(){
			return{
				order:JSON.parse(localStorage.getItem('loginUser'))[0].Hotel,
				
			}
		},
		methods:{
			Back(){
				this.$router.push('/Hotels')
				// this.$store.state.Hotel = []
			},	
			cancel(index){
				
				this.show = !this.show
				var arr=[]
				var m = JSON.parse(localStorage.getItem('loginUser'))[0]
				var a = m.Hotel
				
				a.splice(index,1)
				m.Hotel = a
	
				arr.push(m)
				localStorage.setItem("loginUser",JSON.stringify(arr))
				var users = JSON.parse(localStorage.getItem('user'))
				// console.log(users)
				this.order = m.Hotel
				for(var i=0;i<users.length;i++ ){
					
					if(arr[0].username == users[i].username){
						users.splice(i,1,arr)
						localStorage.setItem('user',JSON.stringify(arr))
						
					}
				}
				
				Toast({message:'取消成功',duration:800,position:"bottom",forbidClick:true})
				
				// console.log(arr)
				// var users = JSON.parse(localStorage.getItem('user'))
				
				// for(var i=0;i<users.length;i++){
				// 	if(a.username = users[i].username){
				// 		 users.splice(i,1,arr)
				// 		 localStorage.setItem('user',JSON.stringify(arr))
				// 	}
				// }
			}
		}
	}
</script>

<style lang="less" scoped>
	.order{width: 100%;height:auto;position: relative;
	
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		.right{position: absolute;top:9px;right:13px;}
		.right>li{float: right;margin-right:20px;
					img{width:20px;};
			}
		p.title{margin:0px auto;font-size:14px;color: black;text-align: center;line-height:45px;font-weight: 500;}
		.orders{
			width: 95%;margin: 40px auto;
			li{width: 100%;height: 120px;margin-top:10px;border-radius:10px;text-align: left;font-size: 12px;position: relative;
				border: 1px solid rgba(230,230,230,.5);box-shadow: 2px 2px 2px 2px rgba(230,230,230,.8);background-color: darkcyan;
				h6{font-weight: 400px;font-size: 16px;margin-left: 20px;margin-top: 10px;overflow: hidden;}
				p{margin-top: 10px;margin-left: 20px;}
				.van-button{position: absolute;bottom:5px;right: 20px;width:55px;height:25px;border-radius:8px;border: none;background-color: rgba(255, 191, 68, 1);}
			}
		}
		
	}
</style>
