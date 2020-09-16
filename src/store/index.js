import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultMovieList = [
  {
    id: "1",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: false,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    id: "2",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: true,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    id: "3",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: false,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    id: "4",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: true,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    id: "5",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: false,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    id: "6",
    title: "Kill Bill: Vol 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Kill_Bill_Volume_2.png",
    year: 2004,
    oscar: true,
    type: "Action & Adventure",
    score: 4.3,
    length: 154,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
     ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
  }
];

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
