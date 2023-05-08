<template>
  <div>
    <div v-for="(pais, i) in paises" :key="i">
      <ProjetoPaises :pais="pais" @pais="setaPais($event)" />
    </div>

    <h1 style="color: red;">{{ paisEscolhido }}</h1>
  </div>
</template>

<script>
import ProjetoPaises from '@/components/ProjetoPaises.vue';
import { ref } from 'vue';

export default {
  components: {
    ProjetoPaises
  },

  setup() {
    const paises = ['Brasil', 'Angola', 'Cabo Verde', 'Alemanha', 'Argentina'];

    const paisEscolhido = ref('');

    function setaPais(e) {
      paisEscolhido.value = e;
    }

    return {
      paises,
      setaPais,
      paisEscolhido
    };
  }
}
</script>