<template>
  <header class="header">

    <!-- Conteúdo "Title" -->
    <h1 v-if="$slots.title" class="title">
      <slot name="title" />
    </h1>

    <!-- Conteúdo "Description" -->
    <div class="description">
      <slot name="description" />
    </div>

    <!-- Conteúdo "Default" -->
    <div class="content ">
      <slot />
    </div>

  </header>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('Elemento: ', this.$el);
    console.log('Slots: ', this.$slots);
  },
}
</script>

<style>
.header {
  background: #000;
  color: #fff;
}
</style>