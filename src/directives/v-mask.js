import $ from 'jquery'
import 'jquery-mask-plugin'

export default {
  inserted (el) {
    el.focus()
  },
  bind (el, binding) {
    $(el).mask(binding.value)
  }
}
