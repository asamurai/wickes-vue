<template>
  <v-container>
    <film-description-block></film-description-block>
    <films-by-genre-title></films-by-genre-title>
    <film-list-block></film-list-block>
  </v-container>
</template>

<script>
import FilmDescriptionBlock from "@/components/common/FilmDescriptionBlock.vue";
import FilmsByGenreTitle from "@/components/common/FilmsByGenreTitle.vue";
import FilmListBlock from "@/components/common/FilmListBlock";
export default {
  name: "film",
  components: {
    FilmsByGenreTitle,
    FilmDescriptionBlock,
    FilmListBlock
  }
};
</script>

<style scoped></style>
