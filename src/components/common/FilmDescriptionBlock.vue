<template>
  <v-container class="search-container">
    <div class="text-block">
      <div>
        <v-img
          class="rounded-br-0 rounded-bl-0"
          :src="image"
          width="300"
        ></v-img>
      </div>
      <div class="ma-8">
        <v-row class="d-flex">
          <v-col class="d-inline-block">
            <p class="text-h3 font-weight-light">
              {{ title }}
            </p>
          </v-col>
          <v-col class="d-inline-block">
            <div class="score">
              <span class="font-weight-regular">{{ score }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="ma-2">
          <p class="font-weight-light">
            {{
              selectedMovie && selectedMovie.oscar
                ? "Oscar winning movie"
                : genres
            }}
          </p>
        </v-row>
        <v-row class="ma-2 d-flex justify-start">
          <v-col class="d-inline-block">
            <p class="font-weight-medium red-text">
              {{ releaseDate }}
            </p>
          </v-col>
          <v-col class="d-inline-block">
            <p class="font-weight-medium red-text">
              {{ selectedMovie | formatFilm }}
            </p>
          </v-col>
        </v-row>
        <v-row class="ma-2">
          <p class="font-weight-medium">
            {{ overview }}
          </p>
        </v-row>
      </div>
      <router-link to="/" @click.native="resetApplication">
        <span class="back-to-home-icon">
          <v-icon color="#f65261">{{ svgPath }}</v-icon>
        </span>
      </router-link>
    </div>
    <v-container class="search-container-background"> </v-container>
  </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapGetters } from "vuex";
import formatFilm from '@/filters/format-film-duration';

export default {
  name: "film-description-block",
  data() {
    return {
      svgPath: mdiMagnify
    };
  },
  filters: {
    formatFilm
  },
  computed: {
    ...mapGetters(["selectedMovie"]),
    title: function() {
      return this.selectedMovie ? this.selectedMovie.title : 'N/A';
    },
    image: function() {
      return this.selectedMovie ? this.selectedMovie.poster_path : 'N/A';
    },
    filmLength: function() {
      return this.selectedMovie ? this.selectedMovie.length : 'N/A';
    },
    releaseDate: function() {
      return this.selectedMovie ? this.selectedMovie.release_date.split('-')[0] : 'N/A';
    },
    overview: function() {
      return this.selectedMovie ? this.selectedMovie.overview : 'N/A';
    },
    genres: function() {
      return this.selectedMovie ? this.selectedMovie.genres.join(", ") : 'N/A';
    },
    score: function() {
      return this.selectedMovie ? this.selectedMovie.vote_count : 'N/A';
    }
  },
  methods: {
    resetApplication() {
      this.$store.dispatch("resetApplication");
    }
  }
};
</script>

<style scoped>
.red-text {
  color: #f65261;
}
.back-to-home-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}
.search-container {
  position: relative;
  padding: 0 20px !important;
  min-height: 500px;
  color: #ffffff;
}
.text-block {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10;
  min-height: 500px;
  padding: 30px;
}
.search-container-background {
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(../../assets/6b43c09d41f675d513a7f26a1bc32375.jpg) no-repeat 50%;
  background-size: cover;
  filter: blur(2px);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.score {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #555555;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  color: #a1e66f;
}
</style>
