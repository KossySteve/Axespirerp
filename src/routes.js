// contents of the routes.js file are
import item from './components/inventory/item.vue';
import itemGroup from './components/inventory/itemGroup.vue';
import itemKit from './components/inventory/itemKit.vue';
export default [
    { path: '/', component: item },
    { path: '/item-group', component: itemGroup },
    { path: '/item-kit', component: itemKit },
]
// we are exporting an array of objects