import axios from "axios";

const MOVIE_API_URL = "http://react-cdp-api.herokuapp.com/movies";

export default {
  getMovieList: async params => {
    return (
      await axios.get(MOVIE_API_URL, {
        params: params
      })
    ).data.data;
  },
  getMovieById: async id => {
    return (await axios.get(MOVIE_API_URL + `/${id}`)).data;
  }
};
