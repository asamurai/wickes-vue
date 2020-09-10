<template>
  <v-container>
    <film-description-block></film-description-block>
    <films-by-genre-title></films-by-genre-title>
    <film-list-block :films="films"></film-list-block>
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
  },
  data() {
    return {
      // films: []
      films: [
        {
          id: "1",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: false,
          type: "Action & Adventure"
        },
        {
          id: "2",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: true,
          type: "Action & Adventure"
        },
        {
          id: "3",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: false,
          type: "Action & Adventure"
        },
        {
          id: "4",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: true,
          type: "Action & Adventure"
        },
        {
          id: "5",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: false,
          type: "Action & Adventure"
        },
        {
          id: "6",
          title: "Kill Bill: Vol 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
          year: 2004,
          oscar: false,
          type: "Action & Adventure"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
