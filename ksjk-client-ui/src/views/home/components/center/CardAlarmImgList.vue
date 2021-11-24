<template>
	<CardChart :title="'过车异常图片动态展'">
		<div @click.stop="clickItem">
			<vueSeamlessScroll class="scroll-content" :data="listImg" :class-option="defaultOption">
				<div class="img-list">
					<div class="item" v-for="item in listImg" :key="item.id">
						<div class="car-img">
							<img src="../../../../assets/main-bg.png" alt="" />
						</div>
						<div class="car-id cs-p" :class="item.active ? 'active' : 'ee'" :data-id="item.id">
							贵A123458-{{ item.id }}
						</div>
					</div>
				</div>
			</vueSeamlessScroll>
		</div>
		<DetailDialog v-model:value="detailDialog"></DetailDialog>
	</CardChart>
</template>

<script lang="ts">
import vueSeamlessScroll from './mSeamlessScroll.vue';
import { defineComponent, reactive, ref, onMounted, computed, nextTick } from 'vue';
import CardChart from '@components/CardChart.vue';
import DetailDialog from '@/views/dialog/warning/DetailDialog.vue';
type Item = {
	className: string;
	dataset: { id: string };
};
type Target = EventTarget & Item;
export default defineComponent({
	name: 'CardTop',
	components: { CardChart, DetailDialog, vueSeamlessScroll },
	setup(props, ctx) {
		let detailDialog = ref(false); //控制详情弹窗
		let activeIndex = ref(-1);
		let listImg = ref([
			{ id: '1', url: '1111', active: false },
			{ id: '2', url: '2222', active: false },
			{ id: '3', url: '3333', active: false },
			{ id: '4', url: '4444', active: false },
			{ id: '5', url: '5555', active: false },
			{ id: '6', url: '6666', active: false },
			{ id: '7', url: '7777', active: false },
		]);
		const defaultOption = computed(() => {
			return {
				step: 5, // 数值越大速度滚动越快
				limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
				hoverStop: true, // 是否开启鼠标悬停stop
				direction: 2, // 0向下 1向上 2向左 3向右
				openWatch: false, // 开启数据实时监控刷新dom
				singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
				singleWidth: 205, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
				waitTime: 2000, // 单步运动停止的时间(默认值1000ms)
			};
		});
		const selectedItem = (data: string) => {
			console.log(data);
			listImg.value.forEach((item, index) => {
				console.log(item.id, data);
				if (item.id === data) {
					listImg.value[index].active = true;
				} else {
					listImg.value[index].active = false;
				}
			});
			detailDialog.value = true;
			nextTick(() => {
				console.log(listImg.value);
			});
		};
		const clickItem = (el: Event) => {
			let target = el.target as Target;
			if (target.className.startsWith('car-id')) {
				console.log(target.dataset.id);
				selectedItem(target.dataset.id);
			}
		};
		onMounted(() => {});
		return { detailDialog, listImg, defaultOption, clickItem, activeIndex };
	},
});
</script>

<style lang="scss" scoped>
.scroll-content {
	margin: 20px 20px 20px 10px;
	width: calc(100% - 30px);
	height: calc(100% - 40px);
	overflow: hidden;
}
.img-list {
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: nowrap;
	.item {
		width: 185px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 10px;
		.car-img {
			position: relative;
			width: 185px;
			height: 190px;
			background-size: 100% 100%;
			background: url('@/assets/svg/alarm-img-border.svg') no-repeat;
			margin-bottom: 20px;
			img {
				margin: 1px;
				position: absolute;
				width: calc(100% - 2px);
				height: calc(100% - 2px);
				overflow: hidden;
				clip-path: polygon(
					25px 0,
					0 0,
					100% 0,
					100% calc(100% - 30px),
					calc(100% - 30px) 100%,
					0px 100%,
					0 calc(100% - 0px),
					0 25px
				);
			}
		}
	}
}
</style>
