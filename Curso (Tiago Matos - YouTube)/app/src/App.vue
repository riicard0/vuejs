<template>
  <div>
    <TheHeader v-if="showHeader">
      <!-- Conteúdo "Title" -->
      <!-- <template v-slot:title>
        Title
      </template> -->

      <!-- Conteúdo "Description" -->
      <template v-slot:description>
        <h2>Description</h2>
      </template>

      <!-- Conteúdo "Default" -->
      Default Slot
    </TheHeader>

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