<template>
  <v-container class="search-container">
    <v-row
      class="ma-0 d-flex flex-column justify-center align-content-start text-block"
    >
      <div class="text-h3 font-weight-light text-uppercase title">
        Find your movie
      </div>
      <div class="d-flex flex-row justify-start">
        <v-text-field
          v-model="filter"
          label="Solo"
          placeholder="Search"
          filled
          background-color="#555555"
          color="#ffffff"
          class="search-field"
          solo-inverted
        ></v-text-field>
        <v-btn class="search-button" x-large color="#F65261">
          <span class="text-h5 font-weight-regular text-uppercase">
            Search
          </span>
        </v-btn>
      </div>
      <div class="d-flex flex-row justify-start">
        <div class="text-uppercase font-weight-regular search-text">
          Search by
        </div>
        <v-btn-toggle
          v-model="filterByCriteria"
          active-class="active-search-button"
          mandatory
        >
          <v-btn color="#424242" value="title">
            <span class="font-weight-regular text-uppercase search-button">
              Title
            </span>
          </v-btn>

          <v-btn color="#424242" value="genres">
            <span class="font-weight-regular text-uppercase search-button">
              Genre
            </span>
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-row>
    <v-container class="search-container-background"> </v-container>
  </v-container>
</template>

<script>
export default {
  name: "search-block",
  computed: {
    filterByCriteria: {
      get() {
        return this.$store.state.filterByCriteria;
      },
      set(value) {
        this.$store.commit("setMovieFilterByCriteria", value);
        this.updateQueryParams();
        return value;
      }
    },
    filter: {
      get() {
        return this.$store.state.filterCriteria;
      },
      set(value) {
        this.$store.commit("setMovieFilterCriteria", value);
        this.updateQueryParams();
        return value;
      }
    }
  },
  created() {
    if (this.$route.query.sortCriteria) {
      this.$store.commit(
        "setMovieSortCriteria",
        this.$route.query.sortCriteria
      );
    }
    if (this.$route.query.filterCriteria) {
      this.$store.commit(
        "setMovieFilterCriteria",
        this.$route.query.filterCriteria
      );
    }
    if (this.$route.query.filterByCriteria) {
      this.$store.commit(
        "setMovieFilterByCriteria",
        this.$route.query.filterByCriteria
      );
    }
    this.fetchMovies();
  },
  watch: {
    $route() {
      this.$store.commit(
        "setMovieSortCriteria",
        this.$route.query.sortCriteria
      );
      this.$store.commit(
        "setMovieFilterCriteria",
        this.$route.query.filterCriteria
      );
      this.$store.commit(
        "setMovieFilterByCriteria",
        this.$route.query.filterByCriteria
      );
      this.fetchMovies();
    }
  },
  methods: {
    fetchMovies() {
      this.$store.dispatch("fetchMovies");
    },
    updateQueryParams() {
      this.$router.push({
        path: "/",
        query: {
          sortCriteria: this.$store.state.sortCriteria,
          filterCriteria: this.$store.state.filterCriteria,
          filterByCriteria: this.$store.state.filterByCriteria
        }
      });
    }
  }
};
</script>

<style scoped>
.title {
  padding: 30px 0;
}
.search-container {
  position: relative;
  padding: 0 100px !important;
  min-height: 500px;
  color: #ffffff;
}
.text-block {
  position: relative;
  z-index: 10;
  min-height: 500px;
}
.search-container-background {
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../../assets/6b43c09d41f675d513a7f26a1bc32375.jpg) no-repeat 50%;
  background-size: cover;
  filter: blur(2px);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.search-text {
  padding: 10px 30px 10px 0px;
  color: #ffffff;
}
.search-field {
  height: auto;
  width: 500px !important;
  margin: 0 20px 0 0 !important;
}
.search-button {
  color: #ffffff;
}
.active-search-button {
  background: #f65261 !important;
}
</style>
