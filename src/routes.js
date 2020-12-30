// contents of the routes.js file are
import item from './components/inventory/item.vue';
import itemGroup from './components/inventory/itemGroup.vue';
import itemKit from './components/inventory/itemKit.vue';
import inventoryView from './components/inventory/inventoryView.vue';
export default [
    { path: '/', component: item },
    { path: '/item-group', component: itemGroup },
    { path: '/item-kit', component: itemKit },
    { path: '/inventory-view', component: inventoryView },
]
// we are exporting an array of objects