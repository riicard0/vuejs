<template>
  <div>
    <button @click="mostraNome()">Clique aqui</button>
    <button @dblclick="mostraNome()">Clique aqui</button>
    <button>Clique aqui</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    //variable
    const nome = ref("dom");

    function mostraNome() {
      alert('Olá ' + nome.value)
    }

    return {
      nome,
      mostraNome
    }
  }
}
</script>