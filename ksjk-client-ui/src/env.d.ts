import { MQTT } from 'mqtt';
/// <reference types="vite/client" />

import { type } from 'os';

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}



import { ComponentCustomProperties } from 'vue'


declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  // type Obj = {
  //   qos: number = 0 | 1 | 2
  // }
  // interface MQTT {
  //   subscribe: (topic: string, obj: Obj) => void,
  //   setMessageCallback: (topic: string, callback: (topic: string, payload: Buffer) => void) => void,
  //   message: (topic: string, callback: (topic: string, payload: Buffer) => void) => void,
  // }
  interface ComponentCustomProperties {
    $mqtt: MQTT
  }

}

