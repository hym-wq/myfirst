import Vue from 'vue'
import Vuex from 'vuex'

import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  arr:[],
	  userArr:[],
	  Hotel:[],
	  //邮箱验证
	  emailRules: [{
	  	required: true,
	  	message: '手机号不能为空',
	  	trigger: 'onBlur'
	  }, {
	  	// 自定义校验规则
	  	validator: value => {
	  		return /^1([3,4,5,7,8,9][0-9]|4[57]|5[0-35-9]|7[0678]|8[0-9])\d{8}$/
				.test(value)
	  	},
	  	message: '请输入正确手机号',
	  	trigger: 'onBlur'
	  }],
	  //密码验证
	  passwordRules: [{
	  	required: true,
	  	message: '密码不能为空',
	  	trigger: 'onBlur'
	  }, {
	  	// 自定义校验规则
	  	validator: value => {
	  		return /^[\w.]{6,20}$/
	  				.test(value)
	  	},
	  	message: '请输入正确格式的password',
	  	trigger: 'onBlur'
	  }],
	  popular_places:[{
	  		path:require('../assets/img/view1.png'),
	  		placeName:'Costa Rica Quest',
			place_num:'2 places',
	  		time:' 4 days',
	  		value:'$1019'
	  	},{
	  		path:require('../assets/img/view2.png'),
	  		placeName:'Volcano Trail',
			place_num:'4 places',
			time:' 12 days',
	  		value:'$1387'
	  	}
	  ],
	  Area_arr: [{
	  		path1: require("../assets/img/hotels2.1.png"),
	  		areaName: "Millennium Dubai Airport Hotel ",
	  		num: "Dubai – Subway Access",
	  		value: "$75 p/night",
	  		Rate:4,
	  		score:8.2
	  	},
	  	{
	  		path1: require("../assets/img/hotels2.2.png"),
	  		areaName: "Ibis Deira City Cent",
	  		num: "Garhoud, Dubai",
	  		value: "$103 p/night",
	  		Rate:2,
	  		score:6.7
	  	},
	  	{
	  		path1: require("../assets/img/hotels2.3.png"),
	  		areaName: "Grand Hyatt Dubai",
	  		num: "Bur Dubai, Dubai",
	  		value: "$127 p/night",
	  		Rate:5,
	  		score:9.3
	  	},
	  	
	  ]
  },
  mutations: {
	  // toSetting(){
		 // Vue.$router.push("/Setting")
	  // }
	  
	reset(state,payload){
		var users = JSON.parse(localStorage.getItem('user'))
		let obj = JSON.parse(localStorage.getItem('loginUser'))[0]
		for(var i =0;i<users.length;i++){
			if(obj.username == users[i].username){
				
				users.splice(i,1,obj)
				localStorage.setItem('user',JSON.stringify(users))
			}
		}
	}
	
  },
  actions: {
  },
  modules: {
  }
})
