<template>
  <v-container fluid fill-height class="grey lighten-3">
    <v-row style="height: 100%">
      <v-col cols="2" class="">
        <sidebar></sidebar>
      </v-col>

      <v-col cols="10" class="pa-5">
        <v-row class="white rounded-xl">
          <v-col cols="12" class="d-flex justify-center mt-4">
            <span class="display-2 font-weight-black blue--text">
              {{ title }}
            </span>
          </v-col>

          <v-col cols="12">
            <v-row class="d-flex justify-space-around mb-4">
              <v-col
                cols="3"
                class="rounded-xl ma-1 pa-3"
                v-for="(field, index) in fields"
                :key="index"
              >
                <sub-section :fields="field"></sub-section>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <footer-component :footer="footer"></footer-component>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sidebar from "./sidebar";
import submoduleSection from "./submoduleSection";
import footerComponent from "./footerComponent";
export default {
  name: "submoduleForm",
  components: {
    sidebar: sidebar,
    "sub-section": submoduleSection,
    "footer-component": footerComponent,
  },
  data: function () {
    return {};
  },
  props: ["fields", "title", "footer"],
  methods: {},
};
</script>

<style>
</style>