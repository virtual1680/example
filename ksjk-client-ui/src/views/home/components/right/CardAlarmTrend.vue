<template>
  <CardChart :title="'异常报警趋势'" :angleMark="3" :line="true">
    <dv-charts :option="option" />
  </CardChart>
</template>

<script lang="ts">
import CardChart from '@components/CardChart.vue';
import { defineComponent, reactive } from 'vue';
import { EchartsParams } from '@/shims';
export default defineComponent({
	name: 'CardAlarmChart',
	components: { CardChart },
	setup(props, ctx) {
		let option = reactive({
			grid: {
				left: '0%',
				right: '0%',
				top: '7%',
				bottom: '1%',
				containLabel: true,
			},
			tooltip: {
				trigger: 'axis',
				formatter: function (params: EchartsParams[]) {
					var s =
						params[0]['axisValue'] +
						'<br/>' +
						'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
						params[0]['color'] +
						'"></span>' +
						params[0]['seriesName'] +
						': ' +
						params[0]['value'] +
						'%' +
						'<br/>' +
						'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
						params[1]['color'] +
						'"></span>' +
						params[1]['seriesName'] +
						': ' +
						params[1]['value'] +
						'%';
					return s;
				},
			},
			color: ['#5b9bd6', '#ed7d31'],
			xAxis: [
				{
					axisLine: { lineStyle: { color: '#FFF' } },
					offset: 0,
					axisLabel: { show: true, color: '#FFF' },
					type: 'category',
					axisTick: { show: false },
					splitLine: {
						show: true,
						lineStyle: {
							color: '#727272',
							width: 1,
							type: 'dashed',
						},
					},
					data: [
						'1月',
						'2月',
						'3月',
						'4月',
						'5月',
						'6月',
						'7月',
						'8月',
						'9月',
						'10月',
						'11月',
						'12月',
					],
				},
			],
			yAxis: [
				{
					type: 'value',
					axisLine: { show: true, lineStyle: { color: '#FFF' } },
					axisLabel: { color: '#FFF', fontSize: 14 },
					axisTick: { show: false },
					splitArea: {
						show: true,
						interval: '0.5',
					},
					splitLine: {
						show: true,

						lineStyle: {
							color: '#727272',
							width: 1,
							type: 'dashed',
						},
					},
					// data:[0,10,20,30,40,50,60,70,80,90,100],
					min: 0,
					max: 100,
				},
			],
			series: [
				{
					name: '预警',
					type: 'line',
					label: {
						show: true,
						formatter: '{@score}%',
						color: '#5b9bd6',
					},
					itemStyle: {
						borderColor: '#5b9bd6',
						borderWidth: 3,
						shadowColor: 'rgba(0, 0, 0, .3)',
						shadowBlur: 0,
					},
					data: [30, 20, 30, 40, 50, 60, 70, 80, 90, 80, 70, 60],
				},
				{
					name: '报警',
					type: 'line',
					label: {
						show: true,
						formatter: '{@score}%',
						color: '#5b9bd6',
					},
					itemStyle: {
						borderColor: '#5b9bd6',
						borderWidth: 3,
						shadowColor: 'rgba(0, 0, 0, .3)',
						shadowBlur: 0,
					},
					data: [40, 50, 60, 70, 80, 90, 100, 50, 40, 30, 20, 66],
				},
			],
		});
		return { option };
	},
});
</script>

<style lang="scss" scoped></style>
