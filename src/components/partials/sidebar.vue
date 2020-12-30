<template>
      <v-navigation-drawer
         class="rounded-xl mt-2 ml-2"
        permanent
     >
            <!-- <div class="d-flex justify-center">
                hello
            </div> -->
            <div class="blue text-center pa-3 mb-4">
                <span class="sidebar-title">
                    {{title}}
                </span>
            </div>

            <div v-if="!sidebarFields">
                <v-text-field color="blue" label="Search by name or code" :append-icon="'mdi-magnify'" outlined class="pa-5"></v-text-field>
            </div>

            <div v-if="sidebarFields">
                <div class="px-2" v-for="(field, index) in sidebarFields" :key="index">
                <v-text-field 
                v-if="field.type == 'text'"
                color="blue" 
                :label="field.name" 
                :append-icon="'mdi-magnify'"
                outlined
                ></v-text-field>
                    <!-- <p>{{field}}</p> -->
                </div>

                <div class="d-flex justify-center">
                    <v-btn class="blue white--text">
                        Submit
                    </v-btn>
                </div>
            </div>
     </v-navigation-drawer>
</template>

<script>
export default{
    name: 'sidebar',
    data: function(){
        return{
            data: {}  
        }
    },
    props:['title','name','sidebarFields'],
    methods: {
        showProp: function(){
            
        }
    }
}
</script>

<style lang="scss">

    .sidebar-title{
        color: white;
        font-size: 20px;
    }
    .button-div{
        width: 100%;
    }
</style>