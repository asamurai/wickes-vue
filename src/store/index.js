import Vue from "vue";
import Vuex from "vuex";
import moviesApiService from "../api/movies-api";

Vue.use(Vuex);

const state = {
  movieList: [],
  selectedMovie: null,
  sortCriteria: "release_date",
  filterCriteria: "",
  filterByCriteria: "title"
};

const actions = {
  resetSelectedMovie: ({ commit }) => {
    commit("selectMovie", null);
  },
  fetchMovies: async ({ commit }) => {
    const movies = await moviesApiService.getMovieList({
      sortBy: state.sortCriteria,
      searchBy: state.filterByCriteria,
      search: state.filterCriteria,
      sortOrder: "desc"
    });
    commit("setMovieList", movies);
  },
  fetchMovieByGenres: async ({ commit, state }) => {
    if (state.selectedMovie) {
      const movies = await moviesApiService.getMovieList({
        sortBy: state.sortCriteria,
        searchBy: "genres",
        search: state.selectedMovie.genres[0],
        sortOrder: "desc"
      });
      commit("setMovieList", movies);
    }
  },
  selectMovie: async ({ commit, dispatch }, movieId) => {
    const movie = await moviesApiService.getMovieById(movieId);
    commit("selectMovie", movie);
    dispatch("fetchMovieByGenres");
  }
};

const mutations = {
  setMovieList(state, movieList) {
    state.movieList = movieList;
  },
  selectMovie(state, movie) {
    state.selectedMovie = movie;
  },
  setMovieSortCriteria: (state, sortCriteria) => {
    state.sortCriteria = sortCriteria;
  },
  setMovieFilterCriteria: (state, filterCriteria) => {
    state.filterCriteria = filterCriteria;
  },
  setMovieFilterByCriteria: (state, filterByCriteria) => {
    state.filterByCriteria = filterByCriteria;
  },
};

const getters = {
  movieList: state => state.movieList,
  selectedMovie: state => state.selectedMovie
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
