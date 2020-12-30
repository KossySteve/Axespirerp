<template>
  <v-container fluid fill-height class="grey lighten-3">
    <v-row style="height: 100%">
      <v-col v-if="options.sidebar" cols="2" class="">
        <sidebar :sidebarFields="sidebarFields" :title="title" :name="name"></sidebar>
      </v-col>

      <v-col cols="" class="pa-5">
        <v-row class="white rounded-xl">
          <v-col cols="12" class="d-flex justify-center mt-4">
            <span class="display-2 font-weight-black blue--text">
              {{ title }}
            </span>
          </v-col>

          <!-- form layout -->
            <v-col cols="12" v-if="options.layout == 'form'">
            <v-row class="d-flex justify-space-around mb-4">
              <v-col
                cols="3"
                class="rounded-xl ma-1 pa-3"
                v-for="(field, index) in fields"
                :key="index"
              >
                <sub-section @createData="createData" @updateData="updateData" :fields="field"></sub-section>
              </v-col>
            </v-row>
          </v-col>

          <!-- chart layout -->
          <v-col cols="12" v-if="options.layout == 'chart'">
            <div v-for="(field, index) in fields" :key="index">
              <v-btn 
              v-for="(item, index) in field.fields" 
              :key="index" 
              class="blue outline mx-2 white--text">{{item.label}}</v-btn>
            </div>

            <div class="mt-4">
                <v-textarea color="blue" class="" height="500" outlined>
                  
                </v-textarea>
            </div>
          </v-col>

          <!-- submit button -->
          <v-col v-if="options.layout == 'form'" cols="12" class="d-flex justify-center">
              <v-btn class="blue white--text" large width="300" @click="saveModel">
                Submit
              </v-btn>
          </v-col>
        </v-row>

        <v-row v-if="options.layout == 'form'" class="mt-10">
          <v-col cols="12">
            <footer-component @updateData="updateData" @createData="createData" :footer="footer"></footer-component>
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

import {ipcRenderer} from 'electron';
import { notifications } from '../../main_process/constants'



export default {
  name: "submoduleForm",
  components: {
    sidebar: sidebar,
    "sub-section": submoduleSection,
    "footer-component": footerComponent,
  },
  data() {
    return {
      name: "tobecci",
      data: {model_name: this.submodule_name, field_data:{}},
    };
  },
  props: ["fields", "title", "footer", "options", "sidebarFields", "submodule_name"],
  methods: {
    saveModel() {
      console.log("hello world", this.data, JSON.stringify(this.options));
      // test model save event
      // this.$swal("Hello world")
      ipcRenderer.send(notifications.MODEL_SAVE, this.data)
    },
    createData(item) {
      console.log("create an entry field: " + item);
      this.data.field_data[item.model] = "";
    },
    updateData(item) {
      console.log("**received item data**" + JSON.stringify(item));
      this.data.field_data[item.model] = item.value;

      console.log("This is the current data")
      console.log(this.data);
      console.log(this.options) 
      console.log("End current data")
    },
  },
  mounted(){
    ipcRenderer.on('DATA_ENTRY_SUCCESS',(evt, detail)=> {
        this.$swal(detail);
    })

    ipcRenderer.on('DATA_ENTRY_FAILED', (evt, detail)=> {
        this.$swal(detail);
    })
  }
};
</script>

<style>
</style>