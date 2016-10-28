import $ from 'jquery'
import 'jquery-mask-plugin'

export default {
  inserted (el) {
    // Remove focus then focus the element
    el.blur()
    setTimeout(() => {
      el.focus()
    }, 100)
  },
  bind (el, binding) {
    $(el).mask(binding.value)
  }
}
