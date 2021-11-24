import { useThrottleFn } from '@vueuse/core'

/**
 * 节流
 * @param fun 执行函数
 * @param wait 延时执行时间（毫秒）
 */
export const throttle = (fun: () => void, wait: number = 500) => {
    let cc = useThrottleFn(fun, 5000, true);
    cc();
};

