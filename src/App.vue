<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.global-container {
  /*max-width: 100% !important;*/
  height: 100%;
  background: #232323;
}
.container {
  padding: 0 !important;
}
* {
  text-decoration: none;
}
</style>
