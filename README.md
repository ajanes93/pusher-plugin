##Vue Pusher Plugin
>Simple plugin for managing channels and events within vue utilising pusher-js

##Usage
>Import as plugin in your main.js file

```js
//main.js
import Vue from 'vue'
import Pusher from 'pusher-plugin'

Vue.use(Pusher, {
    pusherKey: "yourPublicPusherKey", 
    forceTLS: true, 
    cluster: "eu"
})
```

>Use available methods in components
* ```subscribeToPusherChannel(channel)```
* ```unsubscribeFromPusherChannel(channel)```
* ```bindEventToPusherChannel(channel, event, callback)```
* ```unbindEventFromPusherChannel(channel, event, callback = false)```

```vue
//Hello.vue
<template>
    {{pusherData}}
</template>
<script>
export default {
    data: () => ({
        pusherData: {}
    }),
    created () {
      const vm = this
      vm.subscribeToPusherChannel('test_channel')
      vm.bindEventToPusherChannel('test_event', (data) => {
        vm.pusherData = data
      })
    },
    destroyed () {
      const vm = this
      vm.unbindEventFromPusherChannel('test_event')
      vm.unsubscribeFromPusherChannel('test_channel')
    }
}
</script>
```
