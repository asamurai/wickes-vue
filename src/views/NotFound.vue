<template>
  <v-container>
    <div
      class="d-flex flex-column justify-center align-content-center no-results-block flex-grow-1"
      width="100%"
      height="100%"
    >
      <span class="d-flex flex-row justify-center text-h3 mb-1">
        Page Not Found
      </span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "notfound"
};
</script>

<style scoped>
.no-results-block {
  height: 100vh;
  background: #232323;
  color: #ffffff;
}
</style>
