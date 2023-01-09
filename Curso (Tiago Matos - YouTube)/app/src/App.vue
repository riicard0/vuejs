<template>
  <!-- Exemplo 1 = v-show -->
  <TheHeader v-show="showHeader"/>

  <!-- Exemplo 2 = Variáveis -->
  <div v-show="showName">
    Nome: {{ firstName }} 
    <br>
    Sobrenome: {{ lastName }}
    <br>
    Nome completo: {{ firstName + ' ' + lastName }}
  </div>

  <!-- Exemplo 3 = v-if -->
  <div v-show="showIf">
    <div v-if="accessLevel === 'admin'">Administrador</div>
    <div v-else-if="accessLevel === 'marketing'">Marketing</div>
    <div v-else>Current User</div>
  </div>

  <!-- Exemplo 4 = v-for -->
  <div>
    <div 
      v-for="(obj, index) in todos"
      v-bind:key="obj.id"
      class="todos-item"
    >
      {{ index+=1 }} - {{ obj.title }}
    </div>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data(){
    return {
      showHeader: false,
      firstName: 'Jon',
      lastName: 'Snow',
      showName: false,
      showIf: false,
      accessLevel: '',
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
          }
        }
      }
</script>

<style>
.todos-item {
  background: #000;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
