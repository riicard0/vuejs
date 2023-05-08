<template>
  <div>
    <h1>{{ pais }}</h1>
    <button @click="$emit('pais', pais)">Escolher País</button>
  </div>
</template>

<script>
export default {
  props: ["pais"],
  emits: ['pais'],

  setup() {
    return {};
  }
}
</script>