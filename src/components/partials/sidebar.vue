<template>
      <v-navigation-drawer
         class="rounded-xl mt-2 ml-2"
        permanent
     >
            <!-- <div class="d-flex justify-center">
                hello
            </div> -->
            <div class="blue text-center pa-3">
                <span class="white--text display-1">Item</span>
            </div>

                <v-text-field color="blue" label="Search by name or code" :append-icon="'mdi-magnify'" outlined class="pa-5"></v-text-field>

     </v-navigation-drawer>
</template>

<script>
export default{
    name: 'sidebar',
    data: function(){
        return{
            
        }
    },
    methods: {

    }
}
</script>

<style>

</style>