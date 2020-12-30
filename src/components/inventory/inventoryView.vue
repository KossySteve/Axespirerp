!<template>
  <div class="fill-height" color="red">
    <sub-module-form :sidebarFields="sidebarFields" :options="options" :fields="fields" :title="title" :footer="footerFields"> </sub-module-form>
  </div>
</template>

<script>
import submoduleForm from "../partials/submoduleForm.vue";
export default {
  name: "inventoryView",
  components: {
    "sub-module-form": submoduleForm,
  },
  data: function () {
    return {
      title: "Inventory view",
      options: {
        sidebar: true,
        layout: "chart",
      },
      fields: [
        {
          name: "General details",
          fields: [
            { label: "Charts", type: "text", model:"code" },
            { label: "Print", type: "text", model:"code1" },
            { label: "Data", type: "text", model:"description" },
          ],
        },
      ],

      footerFields: [
        
      ],

      sidebarFields: [
          {name:"Date Range", type:"text"},
          {name:"Date Range", type:"text"},
          {name:"Date Range", type:"text"},
          {name:"Date Range", type:"text"},
          {name:"Date Range", type:"text"},
      ]
    };
  },
  methods: {},
};
</script>

<style>
</style>