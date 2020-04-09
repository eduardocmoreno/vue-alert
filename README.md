## Vuejs Alert Plugin

**Add the alert tag as the first child in the App.vue**

```html
<template>
  <alert></alert> 
</template>
```

**Call alert**

Event click:
```html
<button @click="alert({ options })"></button>
```

Programmatic:
```javascript
//Simple alert
this.alert({
  type: 'success',
  message: '<p>some content as HTML</p> or just text'
});

//Close alert with callback
this.alert({
    close: true,
    afterClose: () => {
      //callback function here
    }
});

//Reload
this.alert({
  reload: {
    type: 'error',
    message: 'Error message here'
  }
});
```

## Options

option | value
------ | -----
type | string (success, info, warning, error/fail/danger)
message | string (text or html)
reload | object (imported component)
lock | boolean
close | boolean
afterClose | function
