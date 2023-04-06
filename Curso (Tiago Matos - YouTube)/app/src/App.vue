<template>
  <div>
    <br><br>

    <AppHook v-if="showAppHook" />

    <button @click="showAppHook = !showAppHook">
      Toggle
    </button>

    <h6>User:</h6>
    {{ user.first_name }}

    <br><br>

    <h6>Full name:</h6>
    {{ fullName }}

    <br><br>

    <button @click="user.first_name = 'Sansa'">Atualizar</button>

  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import AppHook from '@/components/AppHook.vue'

export default {
  name: 'App',

  components: {
    AppHook
  },

  setup() {
    const user = ref({
      first_name: 'Jon',
      last_name: 'Snow'
    })

    const showAppHook = ref(true)

    const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

    watch(user, () => {
      console.log('Lógica cabulosa');
    }, {
      deep: true
    })

    return {
      user,
      fullName,
      showAppHook
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
