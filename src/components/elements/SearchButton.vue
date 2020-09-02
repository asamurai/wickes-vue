<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SearchButton',

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
  button {
    border: none;
    border-radius: 3px;
    background-color: #F65261;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 12pt;
    font-weight: 100;
    padding: 10px 30px;
    margin: 10px;
  }
</style>
