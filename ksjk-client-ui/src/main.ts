import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import mitt from './utils/mitt';
import dataV from '@/components/data-view/index'
import Echarts from './echarts'
import Mqtt from '@/utils/mqtt/index'
// import { useStore } from '@/store/index'
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
const host = 'ws://47.108.14.180:8083/mqtt'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(Mqtt, host, {
    keepalive: 60,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    username: '',
    password: '',
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: ''
    // will: {
    //   topic: '/ksjk/will',
    //   payload: { deviceType: 'web', deviceId: '', willMsg: "lost connected" },
    //   qos: 0,
    //   retain: false
    // },
  }).use(Echarts)
  .use(dataV)
  .use(mitt)
  .mount('#app');
// console.log(useStore())