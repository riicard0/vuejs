const { createApp, ref, computed, watch } = Vue;

const app = createApp({
  setup() {
    //variables
    const contador = ref(0);
    const idade = 19;

    //methods
    function adicionar() {
      contador.value++;
    }
    function remover() {
      contador.value--;
    }
    function resetar() {
      contador.value = 0;
    }

    //computed
    const isMaior = computed(() => idade > 18);
    const nomeCompleto = computed(() => {
      return 'Maria' + ' ' + 'Silva';
    });

    //watchers
    watch(contador, (novoValor, valorAntigo) => {
      if(novoValor > 10 || novoValor < -10){
        contador.value = 0;
      }
    })

    //returned
    return {
      contador,
      adicionar,
      remover,
      resetar,
      isMaior,
      nomeCompleto
    }
  }
})

app.mount('#app')