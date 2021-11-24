<template>
  <CardChart :title="'异常报警率'" :angleMark="3">
    <dv-charts :option="option" />
  </CardChart>
</template>

<script lang="ts">
import * as echarts from 'echarts';
import CardChart from '@components/CardChart.vue';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
	name: 'CardAlarmChart',
	components: { CardChart },
	setup(props, ctx) {
		let xData = ['8.12', '8.13', '8.14', '8.15', '8.16', '8.17'];
		let yData = [20, 80, 30, 70, 50, 10];
		let yData1 = [10, 55, 90, 30, 20, 80];
		let option = reactive({
			grid: {
				left: '0%',
				right: '0%',
				top: '7%',
				bottom: '1%',
				containLabel: true,
			},
			tooltip: {
				show: false,
			},
			animation: false,
			xAxis: [
				{
					type: 'category',
					data: xData,
					axisTick: {
						show: false,
					},
					nameTextStyle: {
						color: '#FFF',
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#FFF',
						},
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 12,
						},
						margin: 8,
					},
				},
			],
			yAxis: [
				{
					show: true,
					type: 'value',
					axisLabel: {
						textStyle: {
							color: '#fff',
						},
					},
					splitLine: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#FFF',
						},
					},
				},
			],
			series: [
				{
					name: '预警',
					type: 'pictorialBar',
					symbolSize: [25, 10],
					symbolOffset: [-14, -6], // 上部椭圆
					symbolPosition: 'end',
					z: 100,
					label: {
						normal: {
							show: true,
							position: [0, -15],
							fontSize: 15,
							color: '#02ACF1',
						},
					},
					color: '#02ACF1',
					data: yData,
				},
				{
					type: 'bar',
					barWidth: '25',
					barGap: '10%', // Make series be overlap
					barCateGoryGap: '10%',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
								{ offset: 0, color: '#02ACF1' },
								{ offset: 1, color: '#103570' },
							]),
							opacity: 0.8,
						},
					},
					data: yData,
				},
				{
					name: '报警',
					type: 'pictorialBar',
					symbolSize: [25, 10],
					symbolOffset: [14, -6], // 上部椭圆
					symbolPosition: 'end',
					z: 12,
					label: {
						normal: {
							show: true,
							position: [30, -15],
							fontSize: 15,
							color: '#CA463C',
							textAlign: 'center',
						},
					},
					color: '#CA463C',
					data: yData1,
				},
				{
					type: 'bar',
					barWidth: '25',
					barGap: '10%', // Make series be overlap
					barCateGoryGap: '10%',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
								{ offset: 0, color: '#CA463C' },
								{ offset: 1, color: '#103570' },
							]),
							opacity: 0.8,
						},
					},
					data: yData1,
				},
			],
		});
		return { option };
	},
});
</script>

<style lang="scss" scoped></style>
