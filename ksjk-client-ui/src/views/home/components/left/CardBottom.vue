<template>
  <CardChart :title="'通知公告'">
    <dv-scroll-board :config="config" style="height: 100%;" :sIndex="sIndex" @selected="selectedRow" />
  </CardChart>
</template>

<script lang="ts">
import CardChart from '@components/CardChart.vue';
import { TableRow } from '@/shims';
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
	name: 'CardTop',
	components: { CardChart },
	setup(props, ctx) {
		let sIndex = ref(-1);
		let config = reactive({
			rowNum: 8,
			headerBGC: '',
			headerHeight: 40,
			oddRowBGC:
				'linear-gradient(276deg, rgba(28, 149, 255, 0) 0%, rgba(2, 115, 213,0.5) 50%, rgba(3, 125, 232, 0) 100%);', //	奇数行背景色
			evenRowBGC: '', //	偶数行背景色
			selectedBGC: 'linear-gradient(180deg, #2DB7DE 0%, #0F6BB2 100%)',
			waitTime: 4000,
			align: ['center', 'center', 'center', 'center'],
			columnWidth: [120, 120, 80],
			header: ['所有矿区', '标题', '类型', '发布时间'],
			data: [
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f12">景峰大山矿区1</div>`,
					`<div class="f12">检查设备情况</div>`,
					`<div class="f12">通知</div>`,
					`<div class="f12">2021-08-25 12:36:25</div>`,
				],
			],
		});

		const selectedRow = (row: TableRow) => {
			sIndex.value = row.rowIndex;
		};
		return { config, selectedRow, sIndex };
	},
});
</script>

<style lang="scss" scoped>
</style>