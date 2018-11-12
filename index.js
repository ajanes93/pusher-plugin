import PusherMixin from './mixins/pusher.js'
import Pusher from 'pusher-js'

export default {
  install (Vue, options = {}) {
    options = Object.assign({forceTLS: true, cluster: 'eu'}, options)

    const pusher = new Pusher(options.pusherKey, {
      cluster: options.cluster,
      forceTLS: options.forceTLS
    })

    Vue.mixin(PusherMixin)

    Object.defineProperties(Vue.prototype, {
      $pusher: {value: pusher}
    })
  }
}
