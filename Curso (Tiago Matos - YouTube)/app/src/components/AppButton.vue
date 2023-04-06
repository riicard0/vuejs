<template>
  <button @click="sendData">
    {{ variant }}
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'success'
    }
  },

  setup(props, { slots, emit }) {
    const sendData = () => {
      return emit('update', props.variant)
    }

    return {
      sendData
    }
  }

}
</script>