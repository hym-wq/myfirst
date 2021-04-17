<template>
	<div class="Tours">
		<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
		<p class="title">Tours</p>
		<ul class="left" >
			<li><img src="../assets/img/wode.svg" alt="" @click="toSetting()"></li>
			<li><img src="../assets/img/xin.svg" alt=""></li>
			
		</ul>
		<div class="search" @click="toSearch">
			<van-search v-model="value" placeholder="Search Tours" 
						disabled 
						background="rgba(251, 250, 248, 1)"
						input-align="center"/>
		</div>
		<div class="btn_box">
			<ul >
				<li class="left"><img src="../assets/img/btn1.svg" alt=""></li>
				<li class="mid_right" ><router-link :to="{name:'picture'}"><img @click="topicture()"  src="../assets/img/btn3.2.svg" alt=""><img class="img_two" ref="picture2" @click="topicture()"  src="../assets/img/btn3.1.svg" alt=""style="display:none"></router-link></li>
				<li class="mid_left" ><router-link :to="{name:'word'}"><img @click="toword()" ref="picture3" src="../assets/img/btn2.1.svg" alt=""><img  @click="toword()" class="img_two" ref="picture4" src="../assets/img/btn2.2.svg" alt="" ></router-link></li>
			</ul>
			
			
		</div>
		<transition :name="transitionName">
		      <router-view ></router-view>
		 </transition>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Search } from 'vant';
	
	Vue.use(Search);
	export default{
		name:'Tours',
		data(){
			return{
				value:'',
				m:'none',
				transitionName: "",
			}
		},
		methods:{
			Back(){
				this.$router.push('/Home')
				
			},
			toSearch(){
				this.$router.push('/Search')
			},
			topicture(){
				this.$refs.picture4.style.display = 'block'
				this.$refs.picture3.style.display = 'none'
				this.$refs.picture2.style.display = 'block'
			},
			toword(){
				this.$refs.picture4.style.display = 'none'
				this.$refs.picture3.style.display = 'block'
				this.$refs.picture2.style.display = 'none'
			},
			toSetting(){
				this.$router.push('/Setting')
			}
			
		},
		  watch: {//使用watch 监听$router的变化
		    $route(to, from) {
		      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
		      if(to.meta.index > from.meta.index){
		        //设置动画名称
		        this.transitionName = 'slide-left';
		      }else{
		        this.transitionName = 'slide-right';
		      }
		    }
		  }

	}
</script>

<style lang="less" scoped>
	@import "../assets/css/Search.css";
	.Tours{
		width: 100%;
		height: auto;
		position: relative;
		.back{position: absolute;@height: 20px;width:80px;left:13px;top:9px;color: rgba(255, 191, 68, 1);
			span{font:10px Microsoft YaHei;line-height:@height;}
			img{width: 9px;height: 15px;overflow: hidden;margin: 0 5px 0 0 ;vertical-align: middle;}}
		p.title{margin: 0 auto;font-size: 12px;color: rgba(90, 75, 65, 1);text-align: center;line-height:45px;font-weight: 500;}
		.left{position: absolute;top:9px;right:13px;}
		.left>li{float: right;margin-right:10px;
					img{width: 15px;};
		}
		.search{margin-top: 20px;}
		.btn_box{
			width: 100%;height:17px;padding:13px 0;position: relative;
			
			li{float:right;img{width: 18px;}}
			.left{margin-right:320px;img{width:16px;margin-top:3px;}}
			.mid_left{margin-right: 18px;img{width:23px;margin-top: -2px;};.img_two{position: absolute;top:13px;left:161px;display: none;}}
			.mid_right{margin-right: 150px;img{width:23px;margin-top: -2px;}.img_two{position: absolute;top:14px;}}
			
			// img:nth-of-type(1){width:18px;position: absolute;left:30px;}
			// img:nth-of-type(2){width:23px;position: absolute;left:80px;}
		}
		
		.slide-right-enter-active,
		.slide-right-leave-active,
		.slide-left-enter-active,
		.slide-left-leave-active {
		  will-change: transform;
		  transition: all 500ms;
		  position: absolute;
		}
		.slide-right-enter {
		  opacity: 0;
		  transform: translate3d(-100%, 0, 0);
		}
		.slide-right-leave-active {
		  opacity: 0;
		  transform: translate3d(100%, 0, 0);
		}
		.slide-left-enter {
		  opacity: 0;
		  transform: translate3d(100%, 0, 0);
		}
		.slide-left-leave-active {
		  opacity: 0;
		  transform: translate3d(-100%, 0, 0);
		}
	}
</style>
