<template>
  <v-row class="white rounded-xl">
    <v-col cols="12">
      <v-row class="d-flex justify-space-around mb-4">
        <v-col cols="12" class="rounded-xl ma-1 pa-3 d-flex flex-wrap">
          <!-- <div v-for="(field, index) in footer" :key="index" class="ma-4">
            <v-btn dense>{{field.name}}</v-btn>
          </div> -->

          <!-- <div v-for="(field, index) in footer" :key="index" class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      v-if="index < 1"
    > -->

          <div
            v-for="(field, index) in footer"
            :key="index"
            class="text-center ma-3"
          >
            <v-dialog width="500" v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="blue lighten-2" dark v-bind="attrs" v-on="on">
                  {{ field.name }}
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2 mb-4">
                  {{ field.name }}
                </v-card-title>

                <v-card-text>
                  <div v-for="(field, index) in field.fields" :key="index">
                    <v-text-field
                      v-if="field.type === 'text'"
                      color="blue"
                      :label="field.name"
                      outlined
                    ></v-text-field>

                    <v-textarea
                      v-if="field.type === 'textarea'"
                      color="blue"
                      class=""
                      outlined
                    >
                      <template v-slot:label>
                        <div>
                          {{ field.name }} <small>(info about item)</small>
                        </div>
                      </template>
                    </v-textarea>

                    <v-checkbox
                      :label="field.name"
                      v-if="field.type === 'checkbox'"
                      color="blue"
                    >
                    </v-checkbox>
                  </div>
                </v-card-text>

                <!-- <v-divider></v-divider> -->
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "footerComponent",
  data: () => {
    return {
      dialogs: [],
    };
  },
  props: ["footer"],
  methods: {
    showArray: function () {
      console.log("hello world", this.dialogs);
    },
  },
  mounted: function () {
    console.log("hello from footer", this.footer);
    this.dialogs;
  },
};
</script>

<style>
</style>