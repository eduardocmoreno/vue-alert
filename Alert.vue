<template>
  <div v-if="activeAlert" class="alert" :class="'alert-' + options.type">
    <div class="alert-container" ref="alert" :class="{'alert-deactive': deactiveAlert}">
      <div class="alert-body">
        <div v-html="options.message"></div>
        <div v-if="!options.lock" class="alert-close-wrapper">
          <button class="alert-close" @click="close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAlert: false,
      deactiveAlert: false,
      options: {
        message: '',
        lock: false,
        afterClose: null
      }
    };
  },
  methods: {
    close() {
      this.deactiveAlert = true;
      this.$refs.alert.addEventListener('animationend', () => {
        this.options.afterClose instanceof Function && this.options.afterClose();
        this.deactiveAlert = false;
        this.activeAlert = false;
      });
    }
  },
  created() {
    //Alert Event listener
    this.$root.$on('alertEvent', options => {
      //close alert
      if (options.close && this.activeAlert) {
        this.options.afterClose = options.afterClose ? options.afterClose : null;
        this.close();
        return;
      }
      
      //reload options
      if(options.reload && this.activeAlert){
        this.options = { ...options.reload };
        return;
      }

      //active alert
      if (options && !this.activeAlert) {
        this.options = { ...options };
        this.activeAlert = true;
      }
    });
  }
};
</script>

<style lang="scss">
@import 'alert';
</style>