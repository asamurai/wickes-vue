<template>
  <v-container class="pa-10">
    <v-row v-if="films.length">
      <v-col
        v-bind:key="film.id"
        v-for="film in films"
        class="d-flex justify-center mb-3"
        cols="12"
        md="4"
        sm="6"
        xs="12"
      >
        <router-link :to="'/film/' + film.id">
          <film-list-element :film="film"></film-list-element>
        </router-link>
      </v-col>
    </v-row>
    <div
      v-else
      class="d-flex flex-column justify-center align-content-center no-results-block flex-grow-1"
      width="100%"
      height="100%"
    >
      <span class="d-flex flex-row justify-center text-h3 mb-1">
        No films found
      </span>
    </div>
  </v-container>
</template>

<script>
import FilmListElement from "@/components/common/FilmListElement";

export default {
  name: "film-list-block",
  components: {
    FilmListElement
  },
  props: {
    films: Array
  }
};
</script>

<style scoped>
.no-results-block {
  background: #232323;
  color: #ffffff;
}
</style>
