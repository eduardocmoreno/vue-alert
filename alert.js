/*
* Vue alert plugin v.1.0.0
* @author Eduardo Moreno - eduardocmoreno[at]gmail[dot]com
* Code under MIT License - http://en.wikipedia.org/wiki/MIT_License
*/

import Alert from './Alert.vue';

const alert = {
  install(Vue) {
    Vue.component("alert", Alert);

    Vue.mixin({
      methods: {
        //Emit alert event
        alert(options) {
          this.$root.$emit('alertEvent', options);
        }
      }
    });
  }
};

export default alert;