<template>
	<teleport to="body">
		<transition name="el-zoom-in-center">
			<dv-full-screen-container v-if="props.value" class="dialog-container">
				<div style="width: 65%; min-height: 520px">
					<dv-border-box-8>
						<div class="main-content">
							<div class="close" @click="close"></div>
							<div class="content">
								<img src="../../../assets/main-bg.png" alt="" />
							</div>
							<div class="footer">
								<div class="name">环境变量路口怎么样</div>
								<div class="time">2020-09-09 12:30:20</div>
							</div>
						</div>
					</dv-border-box-8>
				</div>
			</dv-full-screen-container>
		</transition>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
	name: 'enlarge-img-list',
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
	z-index: 2015;
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
		.close {
			width: 34px;
			height: 34px;
			position: absolute;
			right: 10px;
			top: 10px;
			background: url('@/assets/close-icon.png') no-repeat;
			cursor: pointer;
		}
		.content {
			img {
				width: 100%;
				height: 100%;
			}
		}
		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20px;
			height: 60px;
			color: #ffffff;
			font-weight: 400;
			font-family: Source Han Sans CN;
			.name {
				font-size: 24px;
				line-height: 46px;
			}
			.time {
				font-size: 17px;
				line-height: 29px;
			}
		}
	}
}
</style>
