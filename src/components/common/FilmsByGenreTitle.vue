<template>
  <v-container class="genre-title-container-background">
    <v-row class="d-flex flex-row justify-start">
      <div class="text-uppercase font-weight-medium genre-title-text">
        Films by Drama genre
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "films-by-genre-block"
};
</script>

<style scoped>
.genre-title-container-background {
  padding: 15px 80px !important;
  background: #555555;
}
.genre-title-text {
  padding: 10px 30px;
  color: #ffffff;
}
</style>
