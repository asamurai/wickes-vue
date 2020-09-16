<template>
  <v-container>
    <search-block></search-block>
    <sorting-block></sorting-block>
    <film-list-block></film-list-block>
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
  }
};
</script>
