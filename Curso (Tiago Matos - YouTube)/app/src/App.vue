<template>

  <div>
    <!-- Exemplo 1 -->
    <input v-model="name" type="text">
    {{ name }}

    <br>
    <br>

    <!-- Exemplo 2 -->
    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
    <br>
    {{ pageCount }}

    <br>
    <br>

    <!-- Exemplo 3 -->
    <input v-model="user.first_name" type="text">
    <br>
    <input v-model="user.last_name" type="text">
    <br>
    {{ user.first_name }} {{ user.last_name }}

  </div>

</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      name: '',
      pageCount: 5,
      user: {
        first_name: '',
        last_name: ''
      }
    }
  },
  methods: {
    saveUserName() {
      console.log('Ajax');
      console.log(this.name);
    },
    changePage() {
      console.log('Ajax changePage');
    }
  },
  computed: {

  },
  watch: {
    name(newValue) {
      if (newValue.length >= 3)
        this.saveUserName();
    },
    pageCount() {
      this.changePage();
    },
    user: {
      handler() {
        console.log('User alterado');
      },
      deep: true
    }
  }
}
</script>

<style>

</style>