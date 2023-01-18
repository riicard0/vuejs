<template>
  <header class="header">
    Header
  </header>
</template>

<script>
export default {
  methods: {
    resize($evt) {
      console.log($evt);
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize);
  },
  beforeUnmount() {
    console.log('>>> beforeUnmount');
    window.removeEventListener('resize', this.resize);
  },
  unmounted() {
    console.log('>>> unmounted');
  }
}
</script>

<style>
.header {
  background: #000;
  color: #fff;
}
</style>