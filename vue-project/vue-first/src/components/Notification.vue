<template>
	
	<div class="Notification">
		<van-cell-group>
			<van-cell  is-link size="large" >
			  <template #title>
				<span class="custom-title">General</span>
			  </template>
			</van-cell>
			
		</van-cell-group>
		
		<p><span>Notifications</span></p>
		<van-cell-group>
			<van-cell center title="All New Posts" size="large">
			  <template #right-icon>
				<van-switch v-model="checked" size="24" active-color="rgba(46, 184, 114, 1)" @click="check()"/>
			  </template>
			</van-cell>
			<van-cell center title="Friends" size="large">
			  <template #right-icon>
				<van-switch v-model="checked1" size="24" active-color="rgba(46, 184, 114, 1)" @click="check1()"/>
			  </template>
			</van-cell>
		</van-cell-group>
		
		<p><span>Other</span></p>
		<van-cell-group>
			<van-cell  is-link size="large" >
			  <template #title>
				<span class="custom-title">Label</span>
			  </template>
			</van-cell>
			<van-cell  is-link size="large" >
			  <template #title>
				<span class="custom-title">Privacy Settings</span>
			  </template>
			</van-cell>
			<van-cell  is-link size="large" >
			  <template #title>
				<span class="custom-title">Support</span>
			  </template>
			</van-cell>
		</van-cell-group>
		
		
		
		<p><span>Social</span></p>
		<li>
			<van-cell-group>
				<van-cell   is-link size="large" >
				  <template #title>
					<span class="custom-title">Facebook</span>
				  </template>
				  <template #right-icon>
				  	<van-switch v-model="checked2" size="24" active-color="rgba(46, 184, 114, 1)" @click="check2()"/>
				  </template>
				</van-cell>
				<div class="bg1" style="backgroundColor:rgba(59, 89, 152, 1)"><img src="../assets/img/face.svg" alt=""></div>
			</van-cell-group>
			<van-cell-group>
				<van-cell   is-link size="large" >
				  <template #title>
					<span class="custom-title">Twitter</span>
				  </template>
				  <template #right-icon>
				  	<van-switch v-model="checked3" size="24" active-color="rgba(46, 184, 114, 1)" @click="check3()"/>
				  </template>
				</van-cell>
				<div class="bg1" style="backgroundColor:rgba(85, 172, 238, 1)"><img src="../assets/img/twitter.svg" alt=""></div>
			</van-cell-group>
		</li>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {Switch} from 'vant';
	Vue.use(Switch)
	
	export default{
		data(){
			return{
				checked:JSON.parse(localStorage.getItem('loginUser'))[0].checked,
				checked1:JSON.parse(localStorage.getItem('loginUser'))[0].checked1,
				checked2:JSON.parse(localStorage.getItem('loginUser'))[0].checked2,
				checked3:JSON.parse(localStorage.getItem('loginUser'))[0].checked3,
			}
		},
		methods:{
			check(){
				let arr= [];
				let obj = JSON.parse(localStorage.getItem('loginUser'))[0]
				var users = JSON.parse(localStorage.getItem('user'))
				obj.checked = !obj.checked
				arr.push(obj)
				localStorage.setItem('loginUser',JSON.stringify(arr))
				for(var i =0;i<users.length;i++){
					if(obj.username == users[i].username){
						
						users.splice(i,1,obj)
						localStorage.setItem('user',JSON.stringify(users))
					}
				}
			},
			check1(){
				let arr= [];
				let obj = JSON.parse(localStorage.getItem('loginUser'))[0]
				
				obj.checked1 = !obj.checked1
				arr.push(obj)
				localStorage.setItem('loginUser',JSON.stringify(arr))
				this.$store.commit('reset')
			},
			check2(){
				let arr= [];
				let obj = JSON.parse(localStorage.getItem('loginUser'))[0]
				
				obj.checked2 = !obj.checked2
				arr.push(obj)
				localStorage.setItem('loginUser',JSON.stringify(arr))
				this.$store.commit('reset')
				
			},
			check3(){
				let arr= [];
				let obj = JSON.parse(localStorage.getItem('loginUser'))[0]
				
				obj.checked3 = !obj.checked3
				arr.push(obj)
				localStorage.setItem('loginUser',JSON.stringify(arr))
				this.$store.commit('reset')
			}
		}
	}
</script>

<style lang="less" scoped>
	.Notification{
		.van-cell__title{text-align:left;margin-left:10px;color: rgba(90, 75, 65, 1);font-size: 11px;}
		p{width: 100%;height: 26px;background-color: rgba(251, 250, 248, 1);color: rgba(170, 166, 162, 1);font-size:9px;
			line-height: 26px;text-align: left;span{margin-left: 25px;}}
		li{position: relative;
			.van-cell__title{text-align:left;margin-left:40px;}
			.custom-title{font-size: 11px;color:rgba(90, 75, 65, 1);margin-left: 5px;}
			.bg1{width: 26px;height: 26px;
				position: absolute;top:12px;left:25px;border-radius: 5px;
				img{width: 13px;height: 15px;}
			}
		}
	}
	
</style>
