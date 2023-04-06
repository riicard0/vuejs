<template>
  <div>
    <br><br>

    <AppButton data-vue="Jon" @update="getUpdate" variant="danger">

      Save

      <template #icon>Icon</template>
    </AppButton>

  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'App',

  components: {
    AppButton
  },

  setup() {
    const getUpdate = (data) => {
      console.log('getUpdate', data);
    }

    return {
      getUpdate
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
