<template>
  <CardChart :border="'borderBox11'">
    <div class="header">
      <div class="item">
        <span class="label">总报警(次):</span>
        <span class="value one">190</span>
      </div>
      <div class="item">
        <span class="label">待处理(次):</span>
        <span class="value two">80</span>
      </div>
    </div>
    <dv-scroll-board :config="config" style="height: calc(100% - 65px);" :sIndex="sIndex" @selected="selectedRow" />
		<ProcesDialog v-model:value="dialogShow"></ProcesDialog>
  </CardChart>
</template>

<script lang="ts">
import ProcesDialog from '@/views/dialog/alarm/ProcesDialog.vue';
import CardChart from '@components/CardChart.vue';
import { TableRow } from '@/shims';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
	name: 'CardTop',
	components: { CardChart,ProcesDialog },
	setup(props, ctx) {
		let sIndex = ref(-1);
		let dialogShow = ref(false);
		let config = reactive({
			rowNum: 9,
			headerBGC: '',
			oddRowBGC:
				'linear-gradient(276deg, rgba(28, 149, 255, 0) 0%, rgba(2, 115, 213,0.5) 50%, rgba(3, 125, 232, 0) 100%);', //	奇数行背景色
			evenRowBGC: '', //	偶数行背景色
			selectedBGC: 'linear-gradient(180deg, #2DB7DE 0%, #0F6BB2 100%)',
			waitTime: 6000,
			headerHeight: 50,
			headerFontSize: 16,
			align: ['center', 'center', 'center', 'center', 'center', 'center'],
			columnWidth: [, 120, 120,120,120],
			header: [
				'所有矿区区域',
				'车牌号',
				'司机姓名',
				'时间类型',
				'处理状态',
				'预警时间',
			],
			data: [
				[
					`<div class="f14">景峰大山矿放假了fhdkh空间区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿放假了空间区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿放假了空间区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿放假了空间区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="treated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
				[
					`<div class="f14">景峰大山矿区1</div>`,
					`<div class="f14">贵A123458</div>`,
					`<div class="f14">杨红琴</div>`,
					`<div class="f14">非法逃逸</div>`,
					`<div class="untreated">已处理</div>`,
					`<div class="f14 time-color">2021-08-25 12:36:25</div>`,
				],
			],
		});

		const selectedRow = (row: TableRow) => {
			sIndex.value = row.rowIndex;
			dialogShow.value = true;
		};
		return { config, selectedRow, sIndex,dialogShow };
	},
});
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-around;
	.item {
		display: flex;
		width: 150px;
		height: 55px;
		background: url('@/assets/svg/alarm-num-bg.svg') no-repeat;
		align-items: baseline;
		padding: 3px 0 0 15px;
		.label {
			display: inline-block;
			align-self: center;
			width: 75px;
			font-size: 14px;
			margin-top: 10px;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #ffffff;
		}
		.value {
			display: inline-block;
			flex: 1;
			font-size: 32px;
			font-family: Source Han Sans CN;
			font-weight: bold;
			align-self: center;
			margin-top: 2px;
			&.one {
				color: #29d568;
			}
			&.two {
				color: #ff3737;
			}
		}
	}
}
</style>