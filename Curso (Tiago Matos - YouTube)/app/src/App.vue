<template>
  <div>
    <TheHeader v-if="showHeader" />

    <h1>hello World</h1>
    <br>
    <br>

    <input v-model="name" type="text">

    {{ name }}
    <br>
    <br>

    <button @click="showHeader = !showHeader">Ativar e desativar Header</button>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
      name: 'Jon Snow',
      showHeader: true
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  // beforeCreate() {
  //   console.log('>>> beforeCreate');
  //   console.log('Estado: ', this.name);
  //   console.log('DOM: ', this.$el);
  // },
  // created() {
  //   console.log('>>> created');
  //   console.log('Estado: ', this.name);
  //   console.log('DOM: ', this.$el);
  // },
  // beforeMount() {
  //   console.log('>>> beforeMount');
  //   console.log('Estado: ', this.name);
  //   console.log('DOM: ', this.$el);
  // },
  // mounted() {
  //   console.log('>>> mounted');
  //   console.log('Estado: ', this.name);
  //   console.log('DOM: ', this.$el);
  // },
  // beforeUpdate() {
  //   console.log('>>> beforeUpdate');
  // },
  // updated() {
  //   console.log('>>> updated');
  // }
}

</script>

<style>

</style>