import { useLocalStorage, RemoveableRef } from '@vueuse/core'

export default class Storage {

  private static storage: Map<String, RemoveableRef<any>> = new Map;
  private constructor() { }

  /**
   * 存储数据
   * @param key 
   * @param value 
   */
  static initStorage<T>(key: string, value: T) {
    this.storage.set(key, useLocalStorage(key, value))
  }

  /**
   * 修改数据
   * @param key 
   * @param value 
   * @returns 
   */
  static setStorage<T>(key: string, value: T) {
    if (this.storage.has(key)) {
      let obj = this.storage.get(key) as RemoveableRef<T>
      obj.value = value;
    } else {
      try {
        throw new Error(`The "${key}" key is not in storage`);
      } catch (e) {
        console.log(e);
      }
    }
  }

  /**
   * 获取数据
   * @param key 
   * @returns 
   */
  static getStorage<T>(key: string): T | Error {
    if (this.storage.has(key)) {
      return this.storage.get(key)?.value
    } else {
      return new Error(`The "${key}" key is not in storage`)
    }
  }
}
/**
 * import Storage from '@/utils/storage'
 * 存储数据
 * Storage.initStorage('token', '1234567498794546');
 * 获取数据
 * console.log(Storage.getStorage('token'))
 * 修改数据
 * Storage.setStorage('token', [1, 2, 3, 4])
 * 获取数据
 * console.log((Storage.getStorage('token') as Array<Number>)[0])
 */

