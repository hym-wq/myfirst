<template>
	<div class="word_list">
		<li class="word">New Offer</li>
		<ul class="view_list" v-for="Area in Area_arr">
			<li>
				<img class="img_left" :src="Area.path1" alt="">
				<p>{{Area.areaName}}</p>
				<img class="dw" :src="Area.path2" alt="">
				<span>{{Area.num}}</span>
				<img class="rl" :src="Area.path3" alt="">
				<h6>{{Area.days}}</h6>
				<h5>{{Area.value}}</h5>
				<div class="round">
					<img src="../assets/img/jia.svg" alt="">
				</div>

			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'word_list',
		data() {
			return {
				Area_arr: [{
						path1: require("../assets/img/Rectangle1.png"),
						path2: require("../assets/img/dw.svg"),
						path3: require("../assets/img/rl2.svg"),
						areaName: "Iconic Peru",
						num: "2 places",
						days: '4 days',
						value: "$3499"
					},
					{
						path1: require("../assets/img/Rectangle2.png"),
						path2: require("../assets/img/dw.svg"),
						path3: require("../assets/img/rl2.svg"),
						areaName: "Wild China",
						num: "6 places",
						days: '28 days',
						value: "$3399"
					},
					{
						path1: require("../assets/img/Rectangle3.png"),
						path2: require("../assets/img/dw.svg"),
						path3: require("../assets/img/rl2.svg"),
						areaName: "Beijing to Hong Kong ",
						num: "9 places",
						days: '11 days',
						value: "$1799"
					},
					{
						path1: require("../assets/img/Rectangle4.png"),
						path2: require("../assets/img/dw.svg"),
						path3: require("../assets/img/rl2.svg"),
						areaName: "Amazon to the Andes",
						num: "3 places",
						days: '16 days',
						value: "$3499"
					},
					{
						path1: require("../assets/img/Rectangle5.png"),
						path2: require("../assets/img/dw.svg"),
						path3: require("../assets/img/rl2.svg"),
						areaName: "Inca Discovery",
						num: "4 places",
						days: '8 days',
						value: "$3499"
					},
				]

			}
		}
	}
</script>

<style lang="less" scoped>
	.word_list {
		position: relative;
		width: 100%;

		.word {
			position: absolute;
			right: 15px;
			font-size: 9px !important;
			color: rgba(90, 75, 65, .7);
			line-height: 130%;
			top: -51px;
		}

		.view_list {
			width: 100%;

			li {
				width: 100%;
				height: 68px;
				border-bottom: 1px solid rgba(180, 180, 180, .2);
				margin: 22px auto;
				padding-bottom: 20px;
				text-align: left;
				position: relative;

				.img_left {
					width: 68px;
					height: 68px;
					margin-left: 20px;
					border-radius: 5px;
				}

				p {
					position: absolute;
					top: 0px;
					left: 100px;
					color: rgba(90, 75, 65, 1);
					font-size: 14px;
				}

				.dw {
					width: 10px;
					height: 14px;
					position: absolute;
					top: 27px;
					left: 100px;
				}

				span {
					position: absolute;
					top: 24px;
					left: 115px;
					font-size: 11px;
					color: rgba(170, 166, 162, 1);
				}

				.rl {
					width: 15px;
					height: 16px;
					position: absolute;
					top: 25px;
					left: 185px;
				}

				h6 {
					font-size: 11px;
					color: rgba(170, 166, 162, 1);
					position: absolute;
					top: 24px;
					left: 210px;
					font-weight: 500;
				}

				h5 {
					font-size: 11px;
					color: rgba(90, 75, 65, 1);
					position: absolute;
					top: 50px;
					left: 100px;
					font-weight: 500;
				}

				.round {
					width: 26px;
					height: 26px;
					color: rgba(245, 243, 241, 1);
					background-color: rgba(245, 243, 241, 1);
					border-radius: 13px;
					text-align: center;
					line-height: 23px;
					position: absolute;
					right: 20px;
					top: 0px;

					img {
						width: 11px;
						height: 11px;
						vertical-align: middle;
					}
				}
			}
		}


	}
</style>
