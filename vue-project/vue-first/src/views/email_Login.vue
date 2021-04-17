<template>
	<div class="email_Login">
		<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
		<img class="title" src="../assets/img/trave.svg" alt="">
		<div class="spa">
			<span></span>
		</div>
		
		<p class="title">Log In</p>
		<van-form @submit="onSubmit">
		  <van-field
		    v-model="username"
		    placeholder="Mobile Phone"
		    :rules="emailRules"
		  />
		  <van-field
		    v-model="password"
		    type="password"
		    placeholder="password"
		    :rules="passwordRules"
		  />
		  <van-checkbox icon-size="13px" v-model="checked" shape="square"><span>Remember me</span></van-checkbox>
		  <router-link class="a_right" to="email-Regist">Forgot password?</router-link>
		<div >
		  <van-button class="toLogin" round block type="info" native-type="submit" @click="toHome">Login</van-button>
		</div>
		</van-form>
		
		<div class="or">or login with</div>
		<van-button class="facebook" type="info"><img src="../assets/img/face.svg" alt="">Facebook</van-button>
		<van-button class="twitter"  type="info"><img src="../assets/img/twitter.svg" alt="">Twitter</van-button>
	
		<router-link to="email-Regist" class="bottom">Create an Account</router-link>
	</div>
	  
	
</template>

<script>
import Vue from 'vue';
import { Button,Form,Field,Checkbox,Popup,Toast} from 'vant';
import {mapState} from 'vuex'
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(Popup);
Vue.use(Toast);
export default {
	name:'email_Login',
  data() {
    return {
      username:this.$route.query.email,
      password:this.$route.query.password,
	  checked: true,
    };
  },
  computed:{
	...mapState({
		emailRules:'emailRules',
		passwordRules:'passwordRules',
		
	}),
	
},
  methods: {
    onSubmit(values) {
	  return
    },
	Back(){
		this.$router.go(-1)
	},
	toHome(){
		
		Toast.setDefaultOptions({ duration: 1200,overlay:false });
		var users = JSON.parse(localStorage.getItem("user"));
		var a =false;
		if(Boolean(users)==true){
			for(var i=0;i<users.length;i++){
			  if(this.username==users[i].username){
				  a = true;
				  
			  }
			  if(a==false){
			  	Toast({message: '用户不存在',position: 'bottom'});
			  }
			  
			  if(a==true){
			    if(this.password==users[i].password){
			  	Toast({message: '登录成功',position: 'bottom'});
			  	this.$router.push({
			  		path:"/Home"
			  	})
				
				this.$store.state.userArr.push({
					name:users[i].name,
					country:users[i].Country,
					Area:users[i].Area,
					password:users[i].password,
					username:users[i].username,
					checked:users[i].checked,
					checked1:users[i].checked1,
					checked2:users[i].checked2,
					checked3:users[i].checked3,
					Hotel:users[i].Hotel
				})
				localStorage.setItem("loginUser",JSON.stringify(this.$store.state.userArr))
				break;
			    }else if(this.password!=users[i].password){
			  	  Toast({message:'密码错误',position: 'bottom'})
			    }
			  }
			}
			
		}
		
	},

  },
};
</script>

<style lang="less" scoped>
	
	.email_Login{
		overflow: hidden;
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		.spa{span{display: block;width:100%;height: 1px;background-color: rgba(245, 243, 241, 1);margin-top:12px;}}
		
		
		.button(){width:300px;@height:34px;border-radius:6px;font:10px Microsoft YaHei;}
		div{
			.toLogin{.button();line-height: 150%;color:#fff;background-color: rgba(255, 191, 68, 1);border: none;
						box-shadow: rgba(237, 233, 229, 1) solid 1px;margin:15px auto;}
		}
		.van-field{width:320px;margin:10px auto;}
		.van-checkbox{font:11px Microsoft YaHei;margin:25px 0 20px 40px;span{color: rgba(170, 166, 162, 1);}}
		a.a_right{display: block;color:rgba(255, 191, 68, 1);font: 11px Microsoft YaHei;position: relative;right:-100px;top:-38px;}
		.facebook{.button();background-color:rgba(59, 89, 152, 1);color: #fff;margin-top: 10px;
					img{width: 17px;height: 17px;position: absolute;left:30px;top:15px;}}
		.twitter{.button();background-color:rgba(85, 172, 238, 1);color: #fff;margin-top: 10px;
					img{width: 17px;height: 14px;position: absolute;left:30px;top:15px;}}
		
		.or{
			margin:34px auto;font: 11px Microsoft YaHei;color: rgba(170, 166, 162, 1);
		}
		a.bottom{display: block;color:rgba(255, 191, 68, 1);font: 11px Microsoft YaHei;margin-top: 40px;}
		.van-popup{position: absolute;
		top: 0;right: 0;}
	}
	
</style>
