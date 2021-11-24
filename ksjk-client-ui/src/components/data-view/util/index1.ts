export function randomExtend (minNum:number, maxNum:number) {
  if (arguments.length === 1) {
    return parseInt((Math.random() * minNum + 1).toString(), 10)
  } else {
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10)
  }
}

export function debounce<T>(delay:number, callback:(...args: T[])=>void,vm:T) {
  let lastTime: NodeJS.Timeout
  return function () {
    clearTimeout(lastTime)
    lastTime = setTimeout(() => {
      callback.call(vm, ...arguments)
    }, delay)
  }
}
export function observerDomResize (dom:HTMLElement, callback:()=>void) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

export function getPointDistance (pointOne:number[], pointTwo:number[]) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function uuid (hasHyphen:boolean) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
  })
}
