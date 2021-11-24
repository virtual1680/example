import { defineComponent, ref,getCurrentInstance ,ComponentInternalInstance } from 'vue';
import { hh,slotsTest } from './test';

export default defineComponent({
	props:{
		msg:String,
	},
	setup(props) {
		const count = ref(0);
		const {proxy} = getCurrentInstance() as ComponentInternalInstance;
		const cName = proxy?.$options.class;
		return () => {
			return <div class="text-center">
				{hh(count.value)}
				<h1 class={cName.h1} onClick={()=>{count.value++}} >{props.msg}</h1>
			</div>;
		};
	},
	class:{
		h1:'text-red-500 border-8 border-red-300 border-dotted cursor-pointer'
	},
});
