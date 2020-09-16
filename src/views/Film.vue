<template>
  <v-container class="global-container">
    <film></film>
  </v-container>
</template>

<script>
import Film from "@/components/Film.vue";

export default {
  name: "film-view",
  components: {
    Film
  }
};
</script>
