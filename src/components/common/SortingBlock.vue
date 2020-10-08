<template>
  <v-container class="sorting-container-background">
    <v-row class="d-flex flex-row justify-end">
      <div class="text-uppercase font-weight-regular sort-text">Sort by</div>
      <v-btn-toggle
        v-model="sortCriteria"
        active-class="active-sort-button"
        mandatory
      >
        <v-btn color="#424242" value="release_date">
          <span class="font-weight-regular text-uppercase sort-button">
            Release date
          </span>
        </v-btn>

        <v-btn color="#424242" value="vote_count">
          <span class="font-weight-regular text-uppercase sort-button">
            Rating
          </span>
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "sorting-block",
  computed: {
    sortCriteria: {
      get() {
        return this.$store.state.sortCriteria;
      },
      set(value) {
        return this.$store.commit("setMovieSortCriteria", value);
      }
    }
  },
  watch: {
    sortCriteria() {
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
.sorting-container-background {
  padding: 15px 80px !important;
  background: #555555;
}
.sort-text {
  padding: 10px 30px;
  color: #ffffff;
}
.sort-button {
  color: #ffffff;
}
.active-sort-button {
  background: #f65261 !important;
}
</style>
