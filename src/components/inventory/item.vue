!<template>
  <v-container fluid fill-height class="grey lighten-3">
    <v-row style="height: 100%">
      <v-col cols="2" class="">
        <sidebar></sidebar>
      </v-col>

      <v-col cols="10" class="pa-5">
        <v-row class="white rounded-xl">
          <v-col cols="12" class="d-flex justify-center mt-4">
            <span class="display-2 font-weight-black blue--text">{{
              module.name
            }}</span>
          </v-col>

          <v-col cols="12">
            <v-row class="d-flex justify-space-around mb-4">
              <v-col cols="3" class="rounded-xl ma-1 pa-3">
                <span class="title blue--text d-flex justify-center pb-5">
                  General Details
                </span>

                <v-text-field color="blue" label="Code" outlined></v-text-field>

                <v-text-field color="blue" label="Name" outlined></v-text-field>

                <v-textarea color="blue" class="" outlined>
                  <template v-slot:label>
                    <div>Description <small>(info about item)</small></div>
                  </template>
                </v-textarea>

                <v-text-field
                  color="blue"
                  label="Type"
                  :append-icon="'mdi-magnify'"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Group"
                  :append-icon="'mdi-magnify'"
                  outlined
                ></v-text-field>
                <v-checkbox label="Is Group" color="blue"> </v-checkbox>
              </v-col>

              <v-col cols="3" class="ma-1">
                <span class="title blue--text d-flex justify-center pb-5">
                  Price Details
                </span>
                <v-text-field
                  color="blue"
                  label="Brand"
                  :append-icon="'mdi-magnify'"
                  outlined
                  class=""
                ></v-text-field>

                <v-text-field
                  color="blue"
                  label="Model"
                  :append-icon="'mdi-magnify'"
                  outlined
                  class=""
                ></v-text-field>

                <v-text-field
                  color="blue"
                  label="Base UOM"
                  :append-icon="'mdi-magnify'"
                  outlined
                  class=""
                ></v-text-field>
              </v-col>

              <v-col cols="3" class="rounded-xl ma-1">
                <span class="title blue--text d-flex justify-center pb-5">
                  Additional Details
                </span>
                <v-text-field
                  color="blue"
                  label="Standard Cost"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Sale Rate"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Purchase Rate"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Min Rate"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Max Rate"
                  outlined
                  class=""
                ></v-text-field>
                <v-text-field
                  color="blue"
                  label="Mark up"
                  outlined
                  class=""
                ></v-text-field>

                <v-text-field
                  color="blue"
                  label="Account"
                  :append-icon="'mdi-magnify'"
                  outlined
                  class=""
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import sidebar from "../partials/sidebar";
import {ipcRenderer} from 'electron';
import { notifications } from '../../main_process/constants/'

// test model save event
ipcRenderer.send(notifications.MODEL_SAVE, {hey: "The main"})


export default {
  name: "item",
  components: {
    sidebar: sidebar,
  },
  data: function () {
    return {
      module: {
        name: "Item",
      },
    };
  },
  mounted(){
    document.addEventListener("keydown", this.save);
  },
  beforeDestroy(){
    document.removeEventListener("keydown", this.save);
  },
  methods: {
    save(evt){
      if(!(evt.keyCode == 83 && evt.ctrlKey)){
        return
      }
      ipcRenderer.send(notifications.MODEL_SAVE, {model: this.module.name, fields: {}})
    }
  },
};
</script>

<style>
</style>