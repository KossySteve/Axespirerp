!<template>
  <div class="fill-height" color="red">
    <sub-module-form :submodule_name="submodule_name" :options="options" :fields="fields" :title="title" :footer="footerFields"> </sub-module-form>
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
      submodule_name:"ItemKit",
      options: {
        sidebar: true,
        layout: "form",
      },
      fields: [
        {
          name: "General details",
          fields: [
            { label: "Code", type: "text", model:"code" },
            { label: "Code1", type: "text", model:"code1" },
            { label: "Description", type: "textarea", model:"description" },
            { label: "Type", type: "text", model:"type" },
            { label: "Company", type: "text", model:"company" },
          ],
        },

        {
          name: "",
          fields: [
            { label: "Kit Pricing Method", type: "text", model:"kitPricingMethod" },
            { label: "Min Add-on Count", type: "text", model:"minAddOnCount" },
            { label: "Min Component Count", type: "text", model:"minComponentCount" },
            { label: "Is Kit", type: "checkbox", model:"isKit" },
          ],
        },
      ],

      footerFields: [
        {
          name: "Item Kit Items",
          fields: [
            { name: "Applicable UOM", type: "text", model:"applicableUOM1"},
            { name: "Conversion Rate", type: "text", model:"conversionType"},
            { name: "Select", type: "checkbox", model:"select1"},
            { name: "Default purchase", type: "checkbox", model:"defaultPurchase1"},
            { name: "Default sale", type: "checkbox", model:"defaultSale"},
          ],
        },
        {
          name: "Add on",
          fields: [
            { name: "Applicable UOM", type: "text", model:"applicableUOM2"},
            { name: "Conversion Rate", type: "text", model:"conversionRate"},
            { name: "Select", type: "checkbox", model:"select2"},
            { name: "Default purchase", type: "checkbox", model:"defaultPurchase2"},
            { name: "Default sale", type: "checkbox", model:"defaultSale2"},
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