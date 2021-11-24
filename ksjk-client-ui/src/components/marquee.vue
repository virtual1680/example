<template>
	<div class="scroll-text" ref="outer">
		<div class="st-inner" :class="{ 'st-scrolling': needToScroll }">
			<span class="st-section" ref="inner">{{ text }}</span>
			<span class="st-section" v-if="needToScroll">{{ text }}</span>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick, onUnmounted } from 'vue';
export default defineComponent({
	props: {
		text: String,
	},
	setup(props, { slots }) {
		let outer = ref(null);
		let inner = ref(null);
		let needToScroll = ref(false);
		let text = ref('');
		let _checkTimer: NodeJS.Timer;

		const setText = () => {
      if(slots.default){
        let dom = slots.default() as {children:string}[]
        text.value = dom.reduce((res, it) => res + it.children, '') || '';
      }
		};
		// 获取元素宽度
		const getWidth = (el: HTMLElement) => {
			let { width } = el.getBoundingClientRect();
			return width;
		};
		// 判断子元素宽度是否大于父元素宽度，超出则需要滚动，否则不滚动
		const isOverflow = () => {
			let outerWidth = getWidth(outer.value!!);
			let innerWidth = getWidth(inner.value!!);
			return innerWidth > outerWidth;
		};
		// 检查当前元素是否需要滚动
		const check = () => {
			setText();
			nextTick(() => {
				let flag = isOverflow();
        console.log(flag,'是否需要滚动')
				needToScroll.value = flag;
			});
		};
		onMounted(() => {
			// _checkTimer = setInterval(check, 1000);
			check();
		});
		onUnmounted(() => {
			// clearInterval(_checkTimer);
		});
		return { needToScroll, props, inner, outer };
	},
});
</script>
<style lang="scss" scoped>
.scroll-text {
	overflow: hidden;
	white-space: nowrap;
}
.st-inner {
	display: inline-block;
}
.st-scrolling .st-section {
	padding: 0 5px;
}
// 向左匀速滚动动画
.st-scrolling {
	animation: scroll 10s linear infinite;
}

@keyframes scroll {
	0% {
		transform: translate3d(0%, 0, 0);
	}
	100% {
		transform: translate3d(-50%, 0, 0);
	}
}
</style>
