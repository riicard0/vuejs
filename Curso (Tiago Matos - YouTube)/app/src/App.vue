<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/usuarios/10">Usuário</RouterLink> |
    <RouterLink :to="rotaDinamica">Serviços</RouterLink>

    <br><br>

    <button @click="updateUser()">
      Atualizar perfil
    </button>
  </nav>

  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      rotaDinamica: 'servicos'
    }
  },

  methods: {
    updateUser() {
      const newUser = {
        first_name: 'Tiago',
        last_name: 'Matos',
        email: 'tiago@matos.com'
      }
      this.$store.commit('storeUser', newUser);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
