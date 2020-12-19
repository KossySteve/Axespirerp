!<template>
  <div class="fill-height" color="red">
    <sub-module-form :fields="fields" :title="title" :footer="footerFields"> </sub-module-form>
  </div>
</template>

<script>
import submoduleForm from "../partials/submoduleForm.vue";
export default {
  name: "itemKit",
  components: {
    "sub-module-form": submoduleForm,
  },
  data: function () {
    return {
      title: "Item Kit",
      fields: [
        {
          name: "General details",
          fields: [
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Description", type: "textarea" },
            { label: "Type", type: "text" },
            { label: "Company", type: "text" },
          ],
        },

        {
          name: "",
          fields: [
            { label: "Kit Pricing Method", type: "text" },
            { label: "Min Add-on Count", type: "text" },
            { label: "Min Component Count", type: "text" },
            { label: "Is Kit", type: "checkbox" },
          ],
        },
      ],

      footerFields: [
        {
          name: "Item Kit Items",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Add on",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>