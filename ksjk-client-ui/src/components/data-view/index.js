/**
 * EXPORT COMPONENTS
 */
export { default as borderBox1 } from './components/borderBox1/index'
export { default as borderBox10 } from './components/borderBox10/index'
export { default as borderBox11 } from './components/borderBox11/index'
export { default as borderBox13 } from './components/borderBox13/index'
export { default as borderBox7 } from './components/borderBox7/index'
export { default as borderBox8 } from './components/borderBox8/index'
export { default as borderBox9 } from './components/borderBox9/index'
export { default as capsuleChart } from './components/capsuleChart/index'
export { default as charts } from './components/charts/index'
export { default as decoration1 } from './components/decoration1/index'
export { default as decoration10 } from './components/decoration10/index'
export { default as decoration11 } from './components/decoration11/index'
export { default as decoration2 } from './components/decoration2/index'
export { default as decoration3 } from './components/decoration3/index'
export { default as decoration5 } from './components/decoration5/index'
export { default as decoration7 } from './components/decoration7/index'
export { default as decoration9 } from './components/decoration9/index'
export { default as digitalFlop } from './components/digitalFlop/index'
export { default as fullScreenContainer } from './components/fullScreenContainer/index'
export { default as loading } from './components/loading/index'
export { default as percentPond } from './components/percentPond/index'
export { default as scrollBoard } from './components/scrollBoard/index'
/**
 * IMPORT COMPONENTS
 */
import fullScreenContainer from './components/fullScreenContainer/index'
import loading from './components/loading/index'

// border box
import borderBox1 from './components/borderBox1/index'
import borderBox6 from './components/borderBox6/index'
import borderBox7 from './components/borderBox7/index'
import borderBox8 from './components/borderBox8/index'
import borderBox9 from './components/borderBox9/index'
import borderBox10 from './components/borderBox10/index'
import borderBox11 from './components/borderBox11/index'
import borderBox13 from './components/borderBox13/index'

// decoration
import decoration1 from './components/decoration1/index'
import decoration2 from './components/decoration2/index'
import decoration3 from './components/decoration3/index'
import decoration5 from './components/decoration5/index'
import decoration7 from './components/decoration7/index'
import decoration9 from './components/decoration9/index'
import decoration10 from './components/decoration10/index'
import decoration11 from './components/decoration11/index'

// charts
import charts from './components/charts/index'

import capsuleChart from './components/capsuleChart'
import percentPond from './components/percentPond/index'
import digitalFlop from './components/digitalFlop'
import scrollBoard from './components/scrollBoard/index'

/**
 * USE COMPONENTS
 */
export default function (Vue) {
  Vue.use(fullScreenContainer)
  Vue.use(loading)

  // border box
  Vue.use(borderBox1)
  Vue.use(borderBox6)
  Vue.use(borderBox7)
  Vue.use(borderBox8)
  Vue.use(borderBox9)
  Vue.use(borderBox10)
  Vue.use(borderBox11)
  Vue.use(borderBox13)

  // decoration
  Vue.use(decoration1)
  Vue.use(decoration2)
  Vue.use(decoration3)
  Vue.use(decoration5)
  Vue.use(decoration7)
  Vue.use(decoration9)
  Vue.use(decoration10)
  Vue.use(decoration11)

  // charts
  Vue.use(charts)

  Vue.use(capsuleChart)
  Vue.use(percentPond)
  Vue.use(digitalFlop)
  Vue.use(scrollBoard)
}
