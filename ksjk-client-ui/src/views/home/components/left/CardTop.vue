<template>
  <CardChart title="综合概况">
    <div style="height: 100%;">
      <dv-border-box-7 style="height:50%" :color="['rgba(15,270,424,0.1)', 'rgba(15,270,424,0.1)']" backgroundColor="rgba(15,270,424,0.1)">
        <dv-border-box-8>
          <div class="quan-box">
            <div class="f-c-c">
              <dv-decoration-9 class="quan">
                <dv-digital-flop :config="config" style="width: 100px; height: 50px" />
              </dv-decoration-9>
              <div class="theme-color-tx f16">当日拉车数量(次)</div>
            </div>
            <div class="f-c-c">
              <dv-decoration-9 class="quan">
                <dv-digital-flop :config="config" style="width: 200px; height: 50px" />
              </dv-decoration-9>
              <div class="theme-color-tx f16">运输总量(吨)</div>
            </div>
          </div>
        </dv-border-box-8>
      </dv-border-box-7>
      <div class="pie-chart-box">
        <div class="title">
          <div class="item">
            <span class="label">上车累计总重量</span>
            <span class="value one">200吨</span>
          </div>
          <div class="item" style="margin:10px 0;">
            <span class="label">下车累计总重量</span>
            <span class="value two">198吨</span>
          </div>
          <div class="item">
            <span class="label">相差重量</span>
            <span class="value three">2吨</span>
          </div>
        </div>
        <div class="content">
          <dv-charts :option="option"></dv-charts>
					<div class="num">
						<div class="value">4</div>
						<div class="unit">%</div>
					</div>
        </div>
      </div>
    </div>
  </CardChart>
</template>

<script lang="ts">
import CardChart from '@components/CardChart.vue';
import { EchartsParams } from '@/shims';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
	name: 'CardTop',
	components: { CardChart },
	setup(props, ctx) {
		let config = reactive({
			number: [100],
		});
		let colorList = ['#3DFFC3', '#E99A40', 'rgba(250,250,250,0.5)'];
		let option = reactive({
			title: {
				subtext: '相差重量比',
				x: 'center',
				y: '53%',
				textStyle: {
					fontSize: 14,
					fontWeight: 'normal',
					color: ['#FFF', '#FFF'],
				},
				subtextStyle: {
					color: '#FFF',
					fontSize: 12,
				},
			},
			legend: {
				show: false,
			},
			series: [
				// 主要展示层的
				{
					radius: ['45%', '75%'],
					center: ['50%', '55%'],
					type: 'pie',
					itemStyle: {
						normal: {
							color: function (params: EchartsParams) {
								return colorList[params.dataIndex];
							},
						},
					},
					labelLine: {
						normal: {
							show: true,
							length: 10,
							length2: 25,
							lineStyle: {
								color: '#FFF',
							},
							align: 'left',
						},
						color: '#E99A40',
						emphasis: {
							show: true,
						},
					},
					label: {
						normal: {
							formatter: function (params: EchartsParams) {
								var str = '';
								switch (params.name) {
									case '1':
										str = params.value + '%';
										break;
									case '2':
										str = params.value + '%';
										break;
								}
								return str;
							},
							padding: [0, -21],
							height: 30,
							rich: {
								a: {
									width: 90,
									height: 30,
									lineHeight: 30,
									align: 'left',
								},
								b: {
									width: 60,
									height: 30,
									lineHeight: 30,
									align: 'left',
								},
							},
						},
					},
					data: [
						{ value: 25, name: '1' },
						{ value: 75, name: '2' },
					],
				},
				// 边框的设置
				{
					radius: ['75%', '80%'],
					center: ['50%', '55%'],
					type: 'pie',
					label: {
						normal: {
							show: false,
						},
						emphasis: {
							show: false,
						},
					},
					labelLine: {
						normal: {
							show: false,
						},
						emphasis: {
							show: false,
						},
					},
					animation: false,
					tooltip: {
						show: false,
					},
					itemStyle: {
						normal: {
							color: 'rgba(15,270,424,0.6)',
						},
					},
					data: [
						{
							value: 1,
						},
					],
				},
			],
		});

		return { config, option };
	},
});
</script>

<style lang="scss" scoped>
.quan-box {
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px 0;
	height: calc(100% - 20px);
	.f-c-c {
		width: 33%;
		height: 100%;
		.quan {
			width: 140px;
			height: 140px;
		}
	}
}
.pie-chart-box {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50%;
	.title {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.item {
			border: 1px solid #1ce0ff;
			border-radius: 4px;
			padding: 5px 8px;
			.label {
				display: inline-block;
				width: 98px;
				font-size: 14px;
				font-family: Source Han Sans CN;
				font-weight: 400;
				line-height: 24px;
				color: #ffffff;
			}
			.value {
				margin-left: 10px;
				font-size: 16px;
				&.one {
					color: #3dffc3;
				}
				&.two {
					color: #e99a40;
				}
				&.three {
					color: #ff3737;
				}
			}
		}
	}
	.content {
		position: relative;
		width: 60%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.num{
			position:absolute;
			display: flex;
			align-items: flex-end;
			.value{
				font-size: 30px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FF3737;
			}
			.unit{
				font-size: 20px;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #FF3737;
			}
		}
	}
}
</style>
