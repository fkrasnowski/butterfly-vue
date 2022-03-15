import { Directive } from 'vue'

function touchHandler(event: TouchEvent) {
  let touches = event.changedTouches,
    first = touches[0],
    type = ''
  switch (event.type) {
    case 'touchstart':
      type = 'mousedown'
      break
    case 'touchmove':
      type = 'mousemove'
      break
    case 'touchend':
      type = 'mouseup'
      break
    default:
      return
  }

  let simulatedEvent = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    screenX: first.screenX,
    screenY: first.screenY,
    clientX: first.clientX,
    clientY: first.clientY,
  })

  first.target.dispatchEvent(simulatedEvent)
}

export const vSimulateMouseEvents: Directive = {
  mounted(el: HTMLElement) {
    el.addEventListener('touchstart', touchHandler, true)
    el.addEventListener('touchmove', touchHandler, true)
    el.addEventListener('touchend', touchHandler, true)
    el.addEventListener('touchcancel', touchHandler, true)
  },
}
