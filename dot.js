if (typeof window.jQuery === 'undefined') {
  console.info('jQuery is not loaded and it\'s needed for Loading Dots Plugin')
} else {
  const DEFAULT_CONFIG = { duration: 250 }
  const dotsHtml = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>'
  const dotsClassName = '.dot'

  ;(function ($) {
    $.fn.loadingdots = function (options) {
      let i = 0
      const settings = { ...DEFAULT_CONFIG, options }

      const bucle = function () {
        const $el = $(this)
        let timing = i * settings.duration
        let first = true

        i++

        const cycle = function () {
          // if it's not the first time the cycle is called for a dot then the timing fired is 0
          if (!first) timing = 0
          else first = false

          // delay the animation the timing needed, and then make the animation to fadeIn and Out the dot to make the effect
          $el.delay(timing)
            .fadeTo(1000, 0.4)
            .fadeTo(1000, 0, cycle)
        }

        cycle(first)
      }

      // for every element where the plugin was called we create the loading dots html and start the animations
      return this.each(function () {
        $(this)
          .html(dotsHtml)
          .find(dotsClassName)
          .each(bucle)
      })
    }
  })(window.jQuery)
}
