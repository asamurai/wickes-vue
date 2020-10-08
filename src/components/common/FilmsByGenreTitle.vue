<template>
  <v-container class="genre-title-container-background">
    <v-row class="d-flex flex-row justify-start">
      <div class="text-uppercase font-weight-medium genre-title-text">
        Films by {{ genres }} genre
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "films-by-genre-block",
  computed: {
    ...mapGetters(["selectedMovie"]),
    genres: function() {
      return this.selectedMovie ? this.selectedMovie.genres[0] : "N/A";
    }
  }
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
