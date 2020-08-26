<template>
  <span class="result">
    <slot>{{count}} movies found</slot>
  </span>
</template>

<script>
export default {
  name: 'ResultCount',

  props: {
    count: Number,
  },
};
</script>

<style scoped>
  .result {
    color: #555555;
    font-size: 13pt;
    font-weight: 800;
    padding: 10px 30px;
    margin: 10px;
  }
</style>
