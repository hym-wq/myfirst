<template>
	<div class="setting">
		<div class="top">
			<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
			
			<p class="title">Settings</p>
		</div>
		<ul class="left" >
			<li><img src="../assets/img/dian.svg" alt=""></li>
		</ul>
		<router-view></router-view>
		
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Cell, CellGroup } from 'vant';
	
	Vue.use(Cell);
	Vue.use(CellGroup);
	export default{
		data(){
			return{
				SetArr:[{
					color:'rgba(46, 184, 114, 1)',
					text:'Notification',
					path:require('../assets/img/set1.svg'),
					to:"Notification"
				},{
					color:'rgba(21, 173, 246, 1)',
					text:'Friends',
					path:require('../assets/img/set2.svg')
				},{
					color:'rgba(255, 191, 68, 1)',
					text:'Photos & Camera',
					path:require('../assets/img/set3.svg')
				},{
					color:'rgba(232, 74, 95, 1)',
					text:'Report a Problem',
					path:require('../assets/img/set4.svg')
				},{
					color:'rgba(90, 75, 65, 1)',
					text:'Help',
					path:require('../assets/img/set5.svg')
				},{
					color:'rgba(170, 166, 162, 1)',
					text:'Terms and Conditions',
					path:require('../assets/img/set6.svg')
				},
				
				]
			}
		},methods:{
			Back(){
				this.$router.go(-1)
			},
		}
	}
</script>

<style lang="less" scoped>
	.setting{
		.top{width: 100%;height: 35px;border-bottom: 1px solid rgba(230, 230, 230,.5);padding-bottom: 10px;}
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		.left{position: absolute;top:9px;right:13px;}
		.left>li{float: right;margin-right:10px;
					img{width: 15px;};
		}
		p.title{margin: 0 auto;font-size: 12px;color: rgba(90, 75, 65, 1);text-align: center;line-height:45px;font-weight: 500;}

	}
	
</style>
