import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        red: "#F65261",
        green: "#A1E66F",
        dark: "#232323",
        darkGrey: "#424242",
        lightGrey: "#555555",
        white: "#FFFFFF"
      }
    }
  }
});
