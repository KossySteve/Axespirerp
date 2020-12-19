<template>
  <v-app class="pa-0 ma-0">
    <app-header></app-header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import header from './components/partials/header';

export default {
  name: 'App',

  components: {
    "app-header": header
  },

  data: () => ({
    //
  }),
};
</script>
