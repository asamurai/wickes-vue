<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      class="film-card"
      :elevation="hover ? 12 : 2"
      :class="{ 'on-hover': hover }"
      :contain="false"
    >
      <v-img
        class="rounded-br-0 rounded-bl-0"
        :src="film.image"
        width="350"
      ></v-img>
      <div class="pa-4">
        <div class="d-flex justify-space-between align-center">
          <div class="font-weight-medium">{{ film.title }}</div>
          <div class="year font-weight-medium">{{ film.year }}</div>
        </div>
        <div class="film-type">
          {{ film.oscar ? "Oscar winning Movie" : film.type }}
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "film-list-element",
  props: {
    film: Object
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
