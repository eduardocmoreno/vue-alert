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
  title: 'Title of the alert',
  content: '<p>some content as HTML</p> or just text'
});

//Close alert (just pass options as empty)
this.alert();

//Components
import Component from '@/components/Component.vue';

this.alert({
  title: 'Title of the alert',
  component: Component,
  props: {
    prop1: 'prop1',
    prop2: 'prop2',
    ...
  }
});

```

## Options

option | value
------ | -----
title | string
content | string (text or html)
component | object (imported component)
props | object (props of imported component)