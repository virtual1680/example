<template>
	<teleport to="body">
		<transition name="el-zoom-in-center">
			<dv-full-screen-container v-if="props.value" class="dialog-container">
				<div style="width: 65%; min-height: 520px">
					<dv-border-box-8>
						<div class="main-content">
							<div class="header">预警详情</div>
							<div class="content">
								<div class="info">
									<div class="info-header">
										<div class="label-title">详情信息</div>
										<div class="car-num">
											<div class="car-id">贵A123458</div>
										</div>
									</div>
									<div class="info-content">
										<div class="left">
											<div class="info-item">
												<span class="label">司　　机：</span>
												<span class="value">杨红琴</span>
											</div>
											<div class="info-item">
												<span class="label">过载时间：</span>
												<span class="value">2018-09-09 24:05:24</span>
											</div>
											<div class="info-item">
												<span class="label">创建日期：</span>
												<span class="value">2018-09-09 24:05:24</span>
											</div>
											<div class="info-item">
												<span class="label">类　　型：</span>
												<span class="value">异常</span>
											</div>
											<div class="info-item">
												<span class="label">矿区地域：</span>
												<span class="value">XXX矿业西南场XXX矿业西南场</span>
											</div>
											<div class="info-item">
												<span class="label">矿　　区：</span>
												<span class="value">杭州</span>
											</div>
											<div class="info-item">
												<span class="label">处理情况：</span>
												<span class="value">人为操作错误</span>
											</div>
											<div class="info-item">
												<span class="label">是否处理：</span>
												<span class="value">已处理</span>
											</div>
										</div>
										<div class="line"></div>
										<div class="right">
											<div>
												<div class="info-item">
													<span class="label">上车称重：</span>
													<span class="value">7.5吨</span>
												</div>
												<div class="info-item">
													<span class="label">下车称重：：</span>
													<span class="value">7.5吨</span>
												</div>
												<div class="info-item">
													<span class="label">过载称重：</span>
													<span class="value">7.2吨</span>
												</div>

												<div class="info-item">
													<span class="label">过载时间：</span>
													<span class="value">2018-09-20 13:34:12</span>
												</div>
												<div class="info-item">
													<span class="label">称重差额：</span>
													<span class="value">0.3吨</span>
												</div>
												<div class="info-item">
													<span class="label">设备编号：</span>
													<span class="value">434344980980-000000000</span>
												</div>
												<div class="info-item">
													<span class="label">上矿操作人：</span>
													<span class="value">李小明</span>
												</div>
												<div class="info-item">
													<span class="label">卸矿操作人：</span>
													<span class="value">罗建</span>
												</div>
											</div>
											<div>
												<div class="info-item">
													<span class="label">车辆皮重：</span>
													<span class="value">200kg</span>
												</div>
												<div class="info-item">
													<span class="label">实发毛重：</span>
													<span class="value">1200kg</span>
												</div>
												<div class="info-item">
													<span class="label">实发净重：</span>
													<span class="value">1000kg</span>
												</div>
											</div>
										</div>
									</div>
									<div class="img-one">
										<ImgList title="上矿抓拍"></ImgList>
										<ImgList class="down" title="下矿抓拍"></ImgList>
									</div>
									<div class="img-two">
										<ImgList title="路口抓拍"></ImgList>
									</div>
								</div>
							</div>
							<div class="footer">
								<div class="close-btn" @click="close"></div>
							</div>
						</div>
					</dv-border-box-8>
				</div>
			</dv-full-screen-container>
		</transition>
	</teleport>
</template>

<script lang="ts">
import ImgList from '../components/ImgList.vue';
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
	components: { ImgList },
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const show = computed({
			get: () => props.value,
			set: () => emit('update:value', false),
		});
		const close = () => {
			show.value = !show.value;
		};
		return { props, close };
	},
});
</script>

<style lang="scss" scoped>
.dialog-container {
	position: relative;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	.main-content {
		position: relative;
		width: calc(100% - 4px);
		min-height: 520px;
		background: #0560afc9;
		border: 2px solid #1ce1ff86;
		box-shadow: 0px 3px 12px rgba(28, 224, 255, 0.4);
		padding-bottom: 20px;
		&::before {
			content: '.';
			width: 55px;
			height: 55px;
			position: absolute;
			right: 0;
			top: 0;
			background: url('@/assets/svg/dialog/proces/corner-top.svg');
		}
		&::after {
			content: '.';
			width: 55px;
			height: 55px;
			position: absolute;
			left: 0;
			bottom: 0;
			background: url('@/assets/svg/dialog/proces/corner-bottom.svg');
		}
		.header {
			margin: 20px 0 0px;
			height: 60px;
			background: url('@/assets/svg/dialog/proces/header-title.svg') no-repeat;
			font-size: 24px;
			padding-left: 50px;
			font-family: Source Han Sans CN;
			font-weight: 500;
			line-height: 60px;
			color: #fad341;
			letter-spacing: 3px;
		}
		.content {
			padding: 0 40px;
			.info {
				.info-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 50px;
					.label-title {
						margin-top: 5px;
						position: relative;
						min-width: 100px;
						height: 30px;
						line-height: 30px;
						font-size: 18px;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #ffffff;
						padding-left: 30px;
						background: url('@/assets/svg/dialog/proces/title-icon.svg') no-repeat;
						background-position: left center;
					}
				}
				.info-content {
					width: calc(100% - 80px);
					min-height: 234px;
					background: url('@/assets/info-border.png');
					background-size: 100% 100%;
					background-repeat: no-repeat;
					display: flex;
					font-size: 14px;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #ffffff;
					padding: 20px 40px;
					.info-item {
						line-height: 30px;
					}
					.left {
						display: flex;
						flex: 1;
						flex-direction: column;
					}
					.line {
						margin: 0 30px;
						width: 1px;
						align-self: center;
						min-height: 234px;
						background: linear-gradient(
							116deg,
							rgba(28, 224, 255, 0) 0%,
							#1bd6f3 50%,
							rgba(3, 200, 232, 0) 100%
						);
						opacity: 1;
					}
					.right {
						display: flex;
						flex: 2;
						justify-content: space-around;
					}
				}
				.img-one {
					display: flex;
					margin-top: 15px;
					.down {
						margin-left: 20px;
					}
				}
				.img-two {
					margin-top: 5px;
				}
			}
		}
		.footer {
			display: flex;
			justify-content: flex-end;
			padding-right: 20px;
			.close-btn {
				cursor: pointer;
				width: 92px;
				height: 35px;
				background: url('@/assets/svg/dialog/proces/close-btn.svg');
			}
		}
	}
}
</style>
