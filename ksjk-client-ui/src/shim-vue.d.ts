
declare module '*.vue' {
	import { ComponentOptions } from 'vue';
	const componentOptions: ComponentOptions;
	export default componentOptions;
}
declare module 'mqtt/dist/mqtt.min' {
	import MQTT from 'mqtt'
	export = MQTT
}