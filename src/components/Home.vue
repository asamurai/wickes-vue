<template>
  <v-container>
    <search-block></search-block>
    <sorting-block></sorting-block>
    <film-list-block :films="films"></film-list-block>
  </v-container>
</template>

<script>
import FilmListBlock from "@/components/common/FilmListBlock";
import SortingBlock from "@/components/common/SortingBlock";
import SearchBlock from "@/components/common/SearchBlock";
export default {
  name: "home",
  components: {
    FilmListBlock,
    SortingBlock,
    SearchBlock
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
