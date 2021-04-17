<template>
	<div class="email_Regist">
		<div class="back" @click="Back"><img src="../assets/img/back.svg" alt=""><span> Back</span></div>
		<img class="title" src="../assets/img/trave.svg" alt="">
		<div class="spa">
			<span></span>
		</div>
		<p class="title">Sign Up</p>
		<van-form @onChange="onSubmit()">
			<van-field v-model="name" required placeholder="  name" :rules="nameRules" />

			<van-field v-model="fieldValue" is-link readonly required placeholder="  Country" @click="show = true" />
			<van-popup v-model="show" round position="bottom">
				<van-cascader v-model="cascaderValue" :options="options" @close="show = false" @finish="onFinish" />
			</van-popup>

			<van-field readonly required clickable is-link :value="valueArea" placeholder="  City" @click="bindShow" />

			<!--选择省市区-->
			<van-popup v-model="showArea" position="bottom" :style="{ height: '70%' }">
				<van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
			</van-popup>


			<van-field v-model="Email" required placeholder="  Mobile Phone" :rules="emailRules" />

			<van-field v-model="password" type="password" required placeholder="  password" :rules="passwordRules" />

			<van-field v-model="RepeatPassword" type="password" required placeholder="  Repeat Password" :rules="RepeatPasswordRules" />
			<van-button  class="toemail_Login" @click="save"  >Sign Up</van-button>
		</van-form>

		<p class="bottom">By clicking "Sign Up" you agree to our Terms and Conditions.</p>
	</div>

</template>

<script>
	import Vue from 'vue';
	import {
		Area,
		Popup,
		Field,
		Cascader,
		Button,
		Form,
		Toast
	} from 'vant';
	import AeraInfo from "../common/area.js";
	import {
		mapState
	} from 'vuex';


	Vue.use(Toast);
	Vue.use(Area);
	Vue.use(Popup);
	Vue.use(Field);
	Vue.use(Cascader);
	Vue.use(Button);
	Vue.use(Form);
	export default {
		name: 'email_Regist',
		data() {
			return {
				name: '',
				Email: '',
				password: '',
				RepeatPassword: '',
				//自定义国家
				show: false,
				fieldValue: '',
				cascaderValue: '',
				options: [{
						text: '中国',
						value: '330000',

					},
					{
						text: '海外',
						value: '330001',
					}
				],
				areaList: AeraInfo, //引用地区信息
				showArea: false,
				valueArea: '', //地区值
				arrArea: [], //存放地区数组
				//name验证
				nameRules: [{
					required: true,
					message: '名字不能为空',
					trigger: 'onBlur'
				}, {
					// 自定义校验规则
					validator: value => {
						// console.log(/^[\u4e00-\u9fa5a-zA-Z]{2,9}$/.test(value))
						return /^[\u4e00-\u9fa5a-zA-Z]{2,9}$/.test(value)


					},
					message: '请输入正确格式的名字',
					trigger: 'onBlur'
				}],
				RepeatPasswordRules: [{
					required: true,
					message: '请确认密码',
					trigger: 'onBlur'
				}, {
					// 自定义校验规则
					validator: value => {
						return /^[\w.]{6,20}$/
							.test(value)
					},
					message: '请输入正确的密码格式',
					trigger: 'onBlur'
				}, {
					// 自定义校验规则
					validator: value => {
						if (this.password != this.RepeatPassword) {
							return false
						}
					},
					message: '密码不一致',
					trigger: 'onBlur'
				}],
			}
		},
		computed: {
			...mapState({
				emailRules: 'emailRules',
				passwordRules: 'passwordRules',

			})
		},
		methods: {
			Back() {
				this.$router.go(-1)
			},
			//自定义国家
			onFinish({
				selectedOptions
			}) {
				this.show = false;
				this.fieldValue = selectedOptions.map((option) => option.text).join('/');
			},

			//三级联动
			bindShow() {
				this.showArea = true;
			},
			bindCancel() {
				this.showArea = false;
			},
			//地区选择
			onAreaConfirm(val) {
				this.showArea = false;
				this.arrArea = val;

				if (val[2] == undefined) {
					var addrInfo = val[0].name + '-' + val[1].name
				} else {
					var addrInfo = val[0].name + '-' + val[1].name + '-' + val[2].name;
				}

				this.valueArea = addrInfo
			},
			onChange(values) {
				

			},
			save() {


				Toast.setDefaultOptions({
					duration: 1200,
					overlay: true
				});
				let name = this.nameRules[1].validator(this.name)
				let email = this.emailRules[1].validator(this.Email)
				let password = this.passwordRules[1].validator(this.password)
				let users = JSON.parse(localStorage.getItem("user"))

				if (Boolean(users) == false) {
					if (this.name != '' && this.Email != '' && this.password != '' && this.RepeatPassword != '' && this.fieldValue !=
						'' && this.valueArea != '') {
						// if(a==true){
						var user = {
							name: this.name,
							username: this.Email,
							password: this.password,
							Country: this.fieldValue,
							Area: this.valueArea,
							checked: false,
							checked1: false,
							checked2: false,
							checked3: false,
							Hotel: []
						}

						this.$store.state.arr.push(user)

						this.$router.push({
							path: "/email_Login",
							query: {
								email: this.Email,
								password: this.password
							}
						})
						localStorage.setItem("user", JSON.stringify(this.$store.state.arr))

					}
				} else if (Boolean(users) == true) {
					var a = true;
					for (var i = 0; i < users.length; i++) {
						if (this.Email == users[i].username) {
							Toast({
								message: '账号已存在',
								position: 'bottom'
							})
							a = false
							return a;
						}
					}
					if (this.name != '' && this.Email != '' && this.password != '' && this.fieldValue != '' && this.valueArea != '') {
						if (a == true) {
							var user = {
								name: this.name,
								username: this.Email,
								password: this.password,
								Country: this.fieldValue,
								Area: this.valueArea,
								checked: false,
								checked1: false,
								checked2: false,
								checked3: false,
								Hotel: []
							}
							var reuser = JSON.parse(localStorage.getItem('user'))
							reuser.push(user)
							// this.$store.state.arr.push(user)

							this.$router.push({
								path: "/email_Login",
								query: {
									email: this.Email,
									password: this.password,
								}
							})
							localStorage.setItem("user", JSON.stringify(reuser))
						}

					}
				}



			}
		},
	}
</script>

<style scoped lang="less">
	.email_Regist {

		position: relative;

		.back {
			position: absolute;
			@height: 20px;
			width: 80px;
			left: 13px;
			top: 9px;
			color: rgba(255, 191, 68, 1);

			span {
				font: 10px Microsoft YaHei;
				line-height: @height;
			}

			img {
				width: 9px;
				height: 15px;
				overflow: hidden;
				margin: 0 5px 0 0;
				vertical-align: middle;
			}
		}

		.van-field {
			width: 320px;
			margin: 17px auto;
		}

		.button() {
			width: 300px;
			@height: 34px;
			border-radius: 6px;
			font: 10px Microsoft YaHei;
		}

		.toemail_Login {
			.button();
			background-color: rgba(255, 191, 68, 1);
			color: #fff;
			margin-top: 15px;
		}

		p.bottom {
			color: rgba(170, 166, 162, 1);
			font: 11px Microsoft YaHei;
			margin: 23px auto;
			width: 240px;
		}
	}
</style>
