import * as mqtt from 'mqtt/dist/mqtt.min';
import Emitter from "./Emitter";
import { App } from "vue";
export type MqttConnOpt = mqtt.IClientOptions


export class MQTT {
  mqClient!: mqtt.MqttClient
  private readonly store: any;

  constructor(host: string, opts?: MqttConnOpt) {
    this.connect(host, opts);
  }
  /**
  * 订阅主题
  */
  public subscribe(topic: string, qos: 0 | 1 | 2) {
    if (this.isConnected()) {
      console.log('订阅主题----', topic, qos);
      this.mqClient.subscribe(topic, { qos })
    }
  }

  /**
   * 是否已连接到服务器
   */
  public isConnected() {
    return this.mqClient.connected == true
  }

  connect(host: string, opts?: MqttConnOpt) {
    console.log(host, opts?.clientId)
    this.mqClient = mqtt.connect(host, opts);
    this.mqClient.on('connect', () => {
      console.log('连接成功---', this.mqClient.connected)
      //TODO 重新订阅
    })
    this.mqClient.on('message', (topic: string, payload: Buffer) => {
      console.log('数据响应了---', topic);
      Emitter.emit(topic, payload)
    })
    this.mqClient.on('error', (err: Error) => {
      console.log('连接错误--------------------', err)
    })
    this.mqClient.on('reconnect', () => {
      console.log('重连中......')
    })
  }

  onEvent() {
    ['connect', 'message', 'reconnect', 'close', 'error'].forEach((eventType: string) => {
      this.mqClient.on(eventType, () => {

      })
    })
  }
}

export default {
  install(app: App, connection: string, opts: MqttConnOpt): void {
    // 没有传入连接，抛出异常 | No incoming connection, throw an exception
    if (!connection) {
      throw new Error("[mqtt] cannot locate connection");
    }
    const mqtt = new MQTT(connection, opts);
    app.config.globalProperties.$mqtt = mqtt;
    const hasProxy = typeof Proxy !== "undefined" && typeof Proxy === "function" && /native code/.test(Proxy.toString());

    app.mixin({
      created() {
        const mqtts = this.$options["mqtts"];
        const vm = this;
        if (hasProxy) {
          this.$options.mqtts = new Proxy(
            {},
            {
              set(target: any, key: any, value: any): boolean {
                // 添加监听 | Add monitor
                mqtt.subscribe(key, 0)
                Emitter.addListener(key, value, vm);
                Reflect.set(target, key, value)
                // target[key] = value;
                return true;
              },
              deleteProperty(target: { key: any }, key: any): boolean {
                console.log('remove listener--', key)
                // 移除监听 | Remove monitor
                Emitter.removeListener(key, vm.$options.mqtts[key], vm);
                // delete target.key;
                Reflect.deleteProperty(target, key)
                return true;
              }
            }
          );
          if (mqtts) {
            Object.keys(mqtts).forEach((key: string) => {
              // 给$options中添加sockets中的key | Add the key in sockets to $options
              this.$options.mqtts[key] = mqtts[key];
            });
          }
        }
      },
      beforeUnmount() {
        if (hasProxy) {
          const mqtts = this.$options["mqtts"];
          if (mqtts) {
            Object.keys(mqtts).forEach((key: string) => {
              // 销毁前如果代理存在sockets存在则移除$options中给sockets添加过的key | If the proxy has sockets before destruction, remove the keys added to sockets in $options
              delete this.$options.mqtts[key];
            });
          }
        }
        // mqtt.mqClient.end()
        // app.config.globalProperties.$mqtt = null;
      }
    })
  }
}