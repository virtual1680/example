<template>
  <div>
    <dv-border-box-6 v-if="props.border==='borderBox13'" :color='["#0fcff2","rgba(15,270,424,0.4)"]'>
      <component v-bind:is="props.border" :color='["#0fcff2","rgba(15,270,424,0.4)"]' backgroundColor="rgba(15,270,424,0.1)">
        <div class="card-chart">
          <div class="card-title">
            <div class="left" :class="props.title && props.title?.length > 6?'bg':''">{{props.title}}</div>
            <div>
              <dv-decoration-3 v-if="props.angleMark === 3" style="width:220px;height:20px;" />
              <dv-decoration-1 v-if="props.angleMark === 1" style="width:200px;height:40px;" />
              <div class="icon-box" v-if="props.angleMark === 3">
                <div class="yujing" :class="line?'line':''">预警</div>
                <div class="baojing" :class="line?'line':''">报警</div>
              </div>
            </div>
          </div>
          <div class="card-content">
            <slot></slot>
          </div>
        </div>
      </component>
    </dv-border-box-6>
    <dv-border-box-8 :reverse="true" v-else :color='["#0fcff2","rgba(15,270,424,0.4)"]'>
      <component v-bind:is="props.border" title="异常报警" :color='["#0fcff2","rgba(15,270,424,0.4)"]' backgroundColor="rgba(15,270,424,0.1)">
        <div class="card-chart">
          <div class="card-title">
            <dv-decoration-1 style="width:200px;height:50px;" />
            <dv-decoration-1 style="width:200px;height:50px;" />
          </div>
          <div class="card-content">
            <slot></slot>
          </div>
        </div>
      </component>
    </dv-border-box-8>
  </div>
</template>

<script lang="ts">
import borderBox11 from '@components/data-view/components/borderBox11/src/main.vue';
import borderBox13 from '@components/data-view/components/borderBox13/src/main.vue';

import { defineComponent } from 'vue';
export default defineComponent({
	name: 'CardChart',
	components: { borderBox11, borderBox13 },
	props: {
		border: {
			type: String,
			default: 'borderBox13',
		},
		title: String,
		angleMark: {
			type: Number,
			default: 1,
		},
		line: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, ctx) {
		return { props };
	},
});
</script>

<style lang="scss" scoped>
.card-chart {
	height: 100%;
	padding: 15px 10px;
	.card-title {
		display: flex;
		justify-content: space-between;
		height: 50px;
		// background: crimson;
		.left {
			width: 165px;
			height: 40px;
			background: url('../assets/svg/column-title.svg') no-repeat;
			font-size: 18px;
			font-family: Source Han Sans CN;
			font-weight: 500;
			padding-left: 15px;
			line-height: 40px;
			color: #ffffff;
			letter-spacing: 2px;
			&.bg {
				width: 237px;
				background: url('../assets/svg/column-title-long.svg') no-repeat;
			}
		}
		.icon-box {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.yujing {
				margin-right: 40px;
				position: relative;
				font-size: 12px;
				font-family: Source Han Sans CN;
				color: #ffffff;
				display: flex;
				align-items: center;
				&::before {
					left: -15px;
					position: absolute;
					color: transparent;
					content: '.';
					width: 8px;
					height: 8px;
					background: linear-gradient(90deg, #02acf1 0%, #103570 100%);
				}
			}
			.baojing {
				margin-right: 20px;
				position: relative;
				font-size: 12px;
				font-family: Source Han Sans CN;
				color: #ffffff;
				display: flex;
				align-items: center;
				&::before {
					left: -15px;
					position: absolute;
					color: transparent;
					content: '.';
					width: 8px;
					height: 8px;
					background: linear-gradient(90deg, #ca463c 0%, #103570 100%);
				}
			}
			.baojing {
				&.line {
					&::before {
						left: -25px;
						position: absolute;
						color: transparent;
						content: '.';
						width: 5px;
						height: 5px;
						border-radius: 50%;
						background: #ff8585;
					}
					&::after {
						left: -25px;
						position: absolute;
						color: transparent;
						content: '.';
						width: 20px;
						height: 1px;
						background: #ff8585;
					}
				}
			}
			.yujing {
				&.line {
					&::before {
						left: -25px;
						position: absolute;
						color: transparent;
						content: '.';
						width: 5px;
						height: 5px;
						border-radius: 50%;
						background: #17ffe8;
					}
					&::after {
						left: -25px;
						position: absolute;
						color: transparent;
						content: '.';
						width: 20px;
						height: 1px;
						background: #17ffe8;
					}
				}
			}
		}
	}
	.card-content {
		// margin-top: 15px;
		padding: 0 5px;
		height: calc(100% - 80px);
		// background: cyan;
	}
}
</style>