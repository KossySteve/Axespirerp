!<template>
  <div class="fill-height" color="red">
    <sub-module-form :fields="fields" :title="title" :footer="footerFields"> </sub-module-form>
  </div>
</template>

<script>
import submoduleForm from "../partials/submoduleForm.vue";
export default {
  name: "itemGroup",
  components: {
    "sub-module-form": submoduleForm,
  },
  data: function () {
    return {
      title: "Item Group",
      fields: [
        {
          name: "General details",
          fields: [
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "textarea" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
          ],
        },

        {
          name: "General details",
          fields: [
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Has Sense", type: "checkbox" },
          ],
        },

        {
          name: "General details",
          fields: [
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
            { label: "Code", type: "text" },
          ],
        },
      ],

      footerFields: [
        {
          name: "configuration",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "variation",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Item Location",
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
            { name: "Supplier Code", type: "text"},
            { name: "Supplier Name", type: "text"},
            { name: "Payment Term", type: "text"},
            { name: "Shipping term", type: "text"},
            { name: "allow sales", type: "checkbox"},
            { name: "allow sales return", type: "checkbox"},
            { name: "allow purchase", type: "checkbox"},
            { name: "allow stock transfer", type: "checkbox"},
            { name: "isBatch/Serial", type: "checkbox"},
            { name: "isAuto Serial", type: "checkbox"},
            { name: "isFavourite", type: "checkbox"},
          ],
        },
        {
          name: "Alternate Items",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Stock levels",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Sales Price",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Purchase Price",
          fields: [
            { name: "Applicable UOM", type: "text"},
            { name: "Conversion Rate", type: "text"},
            { name: "Select", type: "checkbox"},
            { name: "Default purchase", type: "checkbox"},
            { name: "Default sale", type: "checkbox"},
          ],
        },
        {
          name: "Item barcode",
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