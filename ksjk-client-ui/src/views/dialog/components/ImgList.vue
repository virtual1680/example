<template>
	<div class="img-container">
		<div class="label-title">{{ props.title }}</div>
		<div class="img-list">
			<div class="img-item">
				<img src="../../../assets/main-bg.png" alt="" />
				<div class="img-title tx-hide">黄金路口黄金路口黄金路口黄金路口黄金路口</div>
				<div class="enlarge"></div>
			</div>
			<div class="img-item">
				<img src="../../../assets/main-bg.png" alt="" />
				<div class="img-title tx-hide">白银路口</div>
				<div class="enlarge" @click="enlargeImg"></div>
			</div>
		</div>
		<EnlargeImgDialog v-model:value="imgDialog"></EnlargeImgDialog>
	</div>
</template>

<script lang="ts">
import EnlargeImgDialog from './EnlargeImgDialog.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	components: { EnlargeImgDialog },
	name: 'img-list',
	props: {
		title: {
			type: String,
			default: '',
		},
	},
	setup(props) {
		let imgDialog = ref(false);
		const enlargeImg = () => {
			console.log('放大图片');
			imgDialog.value = true;
		};
		return { props, enlargeImg, imgDialog };
	},
});
</script>

<style lang="scss" scoped>
.img-container {
	.label-title {
		min-width: 100px;
		height: 30px;
		line-height: 30px;
		font-size: 16px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #ffffff;
		padding-left: 30px;
		background: url('@/assets/svg/dialog/proces/title-icon.svg') no-repeat;
		background-position: left center;
	}
	.img-list {
		display: flex;
		flex-wrap: wrap;
		.img-item {
			position: relative;
			width: 208px;
			height: 138px;
			border: 1px solid #707070;
			margin: 0 10px 10px 0;
			&:last-child {
				margin-right: 0;
			}
			.img-title {
				position: absolute;
				top: 5px;
				left: 1px;
				width: calc(100% - 10px);
				height: 28px;
				line-height: 28px;
				background: linear-gradient(
						90deg,
						rgba(233, 154, 64, 0.7) 0%,
						rgba(233, 154, 64, 0.4) 40%,
						rgba(233, 154, 64, 0) 100%
					)
					no-repeat;
				background-size: 60% 100%;
				font-size: 12px;
				color: #ffffff;
				padding-left: 10px;
			}
			.enlarge {
				position: absolute;
				right: 0;
				bottom: 0;
				width: 35px;
				height: 35px;
				background: url('@/assets/svg/dialog/proces/enlarge-icon.svg');
				background-position: center 2px;
				cursor: pointer;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
