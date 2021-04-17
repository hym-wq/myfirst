<template>
	<div class="set_home">
		<div class="camera">
			<img class="photo" src="../assets/img/camera.png" alt=""@click="sa">
			<p>{{name}}</p>
			<h6>{{username}}</h6>
			<div class="bg">
				<img src="../assets/img/CombinedShape.svg" alt="">
			</div>
		</div>
		
		<ul class="settings">
			<li v-for="set in SetArr">
				<van-cell-group>
					<van-cell  is-link size="large" :to="set.to">
					  <template #title>
						<span class="custom-title">{{set.text}}</span>
					  </template>
					</van-cell>
					
				</van-cell-group>
				<div class="bg1" :style="{'backgroundColor':set.color}"><img :src="set.path" alt=""></div>
			</li>
		</ul>
	</div>
</template>

<script>

	export default{
		data(){
			return{
				
				name:JSON.parse(localStorage.getItem("loginUser"))[0].name,
				username:JSON.parse(localStorage.getItem("loginUser"))[0].username,
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
		},
		methods:{
			sa(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.set_home{
		.camera{width: 100%;height:250px;position: relative;
			img.photo{width: 85px;height: 85px;margin-top:40px;}
			p{color: rgba(90, 75, 65, 1);font-size: 20px;margin-top: 13px;}
			h6{color: rgba(255, 191, 68, 1);font-size: 11px;}
			.bg{width: 34px;height: 34px;border-radius: 50%;background-color: rgba(235, 233, 241, 1);
				position: absolute;top:65px;left:211px;line-height:30px;
				img{width: 15px;height: 13px;vertical-align: middle;}
			}
		}
		.settings{
			li{position: relative;
				.van-cell__title{text-align:left;margin-left:40px;}
				.custom-title{font-size: 11px;color:rgba(90, 75, 65, 1);}
				.bg1{width: 26px;height: 26px;
					position: absolute;top:9px;left:10px;border-radius: 5px;
					img{width: 13px;height: 15px;}
				}
			}
			li:nth-of-type(4){
				margin-top: 45px;
			}
		}
	}
	
</style>
