import Vue from "vue";
import Vuex from "vuex";
import movies from "./movies";

Vue.use(Vuex);

const defaultMovieList = movies.list;

const state = {
  movieList: defaultMovieList,
  selectedMovieId: null
};

const actions = {
  resetFilmList: ({ commit }) => {
    commit("setMovieList", true);
  }
};

const mutations = {
  setMovieList(state, movieList) {
    this.state.movieList = movieList;
  },
  selectMovieId(state, movieId) {
    this.state.selectedMovieId = movieId;
  }
};

const getters = {
  movieList: state => state.movieList,
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
