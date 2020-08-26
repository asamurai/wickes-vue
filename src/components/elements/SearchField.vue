<template>
  <input
    class="search-field"
    :placeholder="placeholder"
    :value="value"
  >
</template>

<script>
export default {
  name: 'SearchField',
  props: {
    value: String,
    placeholder: String,
  },
};
</script>

<style scoped>
  .search-field {
    border: none;
    border-radius: 3px;
    background-color: rgba(5, 5, 5, 0.6);
    color: #FFFFFF;
    cursor: pointer;
    font-size: 12pt;
    font-weight: 100;
    padding: 10px 30px;
    margin: 10px;
  }
</style>
