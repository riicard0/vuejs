<template>
  <div class="card">
    {{ product.name }} - R$ {{ product.price }},00

    <br>

    <button @click="addProduct()">
      Adicionar
    </button>

    <button @click="removeProduct()">
      Remover
    </button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },

  methods: {
    addProduct() {
      this.$store.commit('addProduct', this.product);
    },

    removeProduct() {
      this.$store.commit('removeProduct', this.product.id);
    }
  }
}
</script>

<style>
.card {
  background: bisque;
  padding: 6px;
  margin-bottom: 5px;
}
</style>