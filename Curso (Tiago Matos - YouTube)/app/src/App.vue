<template>
  <div>
    User: {{ user.first_name }} {{ user.last_name }}

    <br><br>

    Root: {{ admin.first_name }} {{ admin.last_name }}
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'App',

  components: {
  },

  setup() {
    const user = reactive({
      first_name: 'Jon',
      last_name: 'Snow'
    })

    const admin = ref({
      first_name: 'Admin',
      last_name: 'Master'
    })

    return {
      user,
      admin
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
