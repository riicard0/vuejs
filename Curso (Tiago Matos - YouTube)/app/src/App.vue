<template>
  <div>
    <BaseAlert :variant="variant">
      {{ text }}
    </BaseAlert>
  </div>

</template>

<script>
import BaseAlert from '@/components/BaseAlert.vue';

export default {
  name: 'App',
  components: {
    BaseAlert
  },
  data() {
    return {
      variant: 'danger',
      text: 'Seu formulário foi enviado com sucesso!'
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },

}

</script>

<style>

</style>