<template>
  <dv-full-screen-container class="screen-adapter">
    <dv-border-box-6 class="warpper" :color="['#0fcff2', 'rgba(15,270,424,0.4)']">
      <div class="main-header">智慧矿山监控大屏</div>
      <dv-border-box-1 class="main-container">
        <div class="wapper">
          <div class="left-chart-container">
            <CardTop style="height: 50%; margin-bottom: 10px"></CardTop>
            <CardBottom style="height: calc(50% - 10px)"></CardBottom>
          </div>
          <div class="center-chart-container">
            <CardAlarmTable style="height: 60%; margin-bottom: 10px"></CardAlarmTable>
            <CardAlarmImgList style="height: calc(40% - 10px)"></CardAlarmImgList>
          </div>
          <div class="right-chart-container">
            <CardAlarmChart style="height: calc(33% - 3px); margin-bottom: 10px"></CardAlarmChart>
            <CardAlarmTrend style="height: calc(33% - 4px); margin-bottom: 10px"></CardAlarmTrend>
            <CardAlarmSortChart style="height: calc(33% - 4px)"></CardAlarmSortChart>
          </div>
        </div>
        <div class="container-footer">
          <dv-decoration-2 class="one item" />
        </div>
        <div class="container-footer">
          <dv-decoration-2 class="two item" />
        </div>
      </dv-border-box-1>
    </dv-border-box-6>
  </dv-full-screen-container>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ComponentInternalInstance, onMounted } from 'vue';
import CardTop from './components/left/CardTop.vue';
import CardBottom from './components/left/CardBottom.vue';

import CardAlarmTable from './components/center/CardAlarmTable.vue';
import CardAlarmImgList from './components/center/CardAlarmImgList.vue';

import CardAlarmChart from './components/right/CardAlarmChart.vue';
import CardAlarmTrend from './components/right/CardAlarmTrend.vue';
import CardAlarmSortChart from './components/right/CardAlarmSortChart.vue';
import { useStore } from '@/store/index';
export default defineComponent({
	name: 'Home',
	components: {
		CardTop,
		CardBottom,
		CardAlarmTable,
		CardAlarmImgList,
		CardAlarmChart,
		CardAlarmTrend,
		CardAlarmSortChart,
	},
	setup(props, ctx) {
		const store = useStore();
		let { proxy } = getCurrentInstance() as ComponentInternalInstance;

		onMounted(() => {
			Reflect.set(proxy?.$options as Object, 'mqtts', {
				'/ksjk/datashow/alarm': (topic: string, payload: Buffer) => {
					console.log(`rx: ${topic}=>${payload}`);
				},
			});
		});
		return { store };
	},
});
</script>
<style lang="scss" scoped>
.screen-adapter {
	background: url('@/assets/main-bg.png') no-repeat;
	background-size: 100% 100%;
	.warpper {
		background: url('@/assets/svg/container-border.svg') no-repeat;
		background-size: 100%;
	}
	.main-header {
		height: 100px;
		font-size: 44px;
		line-height: 85px;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: #1ce0ff;
		letter-spacing: 10px;
		text-align: center;
	}
	.main-container {
		height: calc(100% - 108px);
		width: calc(100% - 10px);
		margin: -7px 5px;
		.wapper {
			margin: 10px;
			padding: 11px 2px;
			box-sizing: border-box;
			display: flex;
			height: 100%;
		}
		.left-chart-container {
			width: 27%;
			height: 100%;
			box-sizing: border-box;
		}
		.center-chart-container {
			margin: 0 10px;
			width: calc(46% - 20px);
			height: 100%;
			box-sizing: border-box;
		}
		.right-chart-container {
			width: 27%;
			height: 100%;
			box-sizing: border-box;
		}
		.container-footer {
			position: absolute;
			bottom: 5px;
			left: 50px;
			width: calc(100% - 100px);
			.item {
				width: 100%;
				height: 4px;
			}
			.two {
				transform: rotate(180deg);
			}
		}
	}
}
</style>
