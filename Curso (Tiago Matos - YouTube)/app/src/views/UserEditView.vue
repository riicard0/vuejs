<template>
  <div>
    {{ $route.params.id }}

    Usuário <br>

    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route);
    // console.log(this.$router);
  },

  methods: {
    login() {
      //ajax login
      this.$router.push('/about');
      console.log('CHEGOU');
    }
  }
}
</script>