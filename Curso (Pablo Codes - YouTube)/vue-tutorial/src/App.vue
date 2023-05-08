<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <ProjetoTutorial />
</template>

<script>
import ProjetoTutorial from '@/components/ProjetoTutorial.vue';

export default {
  name: 'App',
  components: {
    ProjetoTutorial
  },

  setup() {

    return {

    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
