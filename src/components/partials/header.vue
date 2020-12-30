<template>
  <div>
    <v-app-bar app class="d-flex justify-space-around blue darken-3">
      <div
        class="text-center"
        v-for="(module, index) in modules"
        v-bind:key="index"
      >
        <v-menu>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  dense
                  dark
                  v-on="{ ...tooltip, ...menu }"
                  text
                >
                  <span class="subtitle">{{ module.name }}</span>
                </v-btn>
              </template>
              <span>{{ module.description }}</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in module.submodules"
              :key="index"
              :to="item.link"
            >
              <v-list-item-title>
                <span class="subtitle">
                  {{ item.title }}
                </span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "header",
  data: function () {
    return {
      name: "tobecci",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],

      modules: [
        {
          name: "Inventory",
          description: "Inventory module",
          submodules: [
            { title: "Item", link: "/" },
            { title: "Item Kit", link: "item-kit" },
            { title: "Item Group", link: "/item-group" },
            { title: "Inventory View", link: "/inventory-view" },
            { title: "Item Prices", link: "" },
            { title: "Item Settings", link: "" },
            { title: "Location", link: "" },
            { title: "Variant", link: "" },
            { title: "Quick Search", link: "" },
            { title: "Stock Count", link: "" },
            { title: "Stock Counts", link: "" },
            { title: "Stock Transfer Inward", link: "" },
            { title: "Stock Transfer Outward", link: "" },
            { title: "Batch", link: "" },
            { title: "Stock Opening", link: "" },
            { title: "Stock Adjustment", link: "" },
            { title: "Stock Confirmation", link: "" },
          ],
        },
        {
          name: "Procurement",
          description: "procured management",
          submodules: [
            { title: "Carriers", link: "" },
            { title: "Invoice Statements", link: "" },
            { title: "Order Statement", link: "" },
            { title: "Other Statements", link: "" },
            { title: "Purchase Invoice", link: "" },
            { title: "Purchase Order", link: "" },
            { title: "Purchase Receipt", link: "" },
            { title: "Purchase Requisition", link: "" },
            { title: "Purchase Return", link: "" },
            { title: "Purchase Return Request", link: "" },
            { title: "Purchase Summary", link: "" },
            { title: "Receipt Statements", link: "" },
            { title: "Requisition Statements", link: "" },
            { title: "Supplier", link: "" },
          ],
        },

        {
          name: "CRM",
          description: "customer resource management",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Service",
          description: "service module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Finance",
          description: "finance module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Accounting",
          description: "accounting module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Sales",
          description: "sales module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Admin",
          description: "Admin module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Payroll",
          description: "payroll module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "Tools",
          description: "tools module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
          ],
        },

        {
          name: "BI",
          description: "BI module",
          submodules: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
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