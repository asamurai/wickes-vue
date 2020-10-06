<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="film-card"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      :contain="false"
    >
      <v-img
        ref="image"
        class="rounded-br-0 rounded-bl-0"
        :src="film.poster_path"
        width="350"
        v-in-view-observer:once
        @inView="loadPoster"
      ></v-img>
      <div class="pa-4">
        <div class="d-flex justify-space-between align-center">
          <div class="font-weight-medium">{{ film.title }}</div>
          <div class="year font-weight-medium">{{ film.release_date | formatYear }}</div>
        </div>
        <div class="film-type">
          {{ film.oscar ? "Oscar winning Movie" : film.genres.join(", ") }}
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
  import formatYear from '@/filters/format-year-filter';

export default {
  name: "film-list-element",
  props: {
    film: Object
  },
  filters: {
    formatYear
  },
  methods: {
    loadPoster: function () {
      this.$refs.image.src = this.film.poster_path
    }
  }
};
</script>

<style scoped>
.year {
  padding: 4px 10px;
  border: 2px solid #555555;
  border-radius: 5px;
}
.film-card {
  cursor: pointer;
  background: #232323 !important;
  color: #ffffff !important;
}
.film-type {
  color: #424242 !important;
}
</style>
