<template>
  <div>
    <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()">
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
      showAlert: true,
      variant: 'success',
      text: 'Seu formulário foi enviado com sucesso!'
    }
  },
  methods: {
    onClose() {
      this.showAlert = false;
      console.log('on close');
    }
  },
  computed: {

  },
  watch: {

  },

}

</script>

<style></style>