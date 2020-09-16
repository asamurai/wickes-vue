import Vue from "vue";
import Vuex from "vuex";
import movies from "./movies";

Vue.use(Vuex);

const defaultMovieList = movies.list;

const state = {
  movieList: defaultMovieList,
  selectedMovieId: null,
  sortCriteria: "release_date",
  filterCriteria: ""
};

const actions = {
  resetApplication: ({ commit }) => {
    commit("setMovieList", defaultMovieList);
    commit("selectMovieId", null);
  },
  selectMovieByGenres: ({ commit, state }) => {
    const selectedMovie = state.movieList.find(
      movie => movie.id === state.selectedMovieId
    );
    if (selectedMovie) {
      const { genres: selectedMovieGenres } = selectedMovie;
      const moviesWithSimilarGenres = defaultMovieList.filter(movie => {
        return movie.genres.some(genre => selectedMovieGenres.includes(genre));
      });
      commit("setMovieList", moviesWithSimilarGenres);
    }
  },
  selectMovie: ({ commit, dispatch }, movieId) => {
    commit("selectMovieId", movieId);
    dispatch("selectMovieByGenres");
  }
};

const mutations = {
  setMovieList(state, movieList) {
    state.movieList = movieList;
  },
  selectMovieId(state, movieId) {
    state.selectedMovieId = movieId;
  },
  setMovieSortCriteria: (state, sortCriteria) => {
    state.sortCriteria = sortCriteria;
  },
  setMovieFilterCriteria: (state, filterCriteria) => {
    state.filterCriteria = filterCriteria;
  }
};

const getters = {
  movieList: state =>
    state.movieList
      .filter(movie => movie.title.toLowerCase().includes(state.filterCriteria.toLowerCase()))
      .sort((a, b) => b[state.sortCriteria] - a[state.sortCriteria]),
  selectedMovie: state =>
    state.movieList.find(movie => movie.id === state.selectedMovieId)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
