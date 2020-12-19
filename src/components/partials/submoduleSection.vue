<template>
        <div>
                <span class="title blue--text d-flex justify-center pb-5">
                  {{ fields.name }} 
                </span>

                <div v-for="(item, index) in sectionFields" :key="index">
                    <!-- {{item}} -->
                    <v-text-field v-if="item.type === 'text'" color="blue" :label="item.label" outlined></v-text-field>
                    
                    <v-textarea v-if="item.type === 'textarea'" color="blue" class="" outlined>
                  <template v-slot:label>
                    <div>{{item.label}} <small>(info about item)</small></div>
                  </template>
                </v-textarea>

                <v-checkbox
                :label="item.label"
                v-if="item.type === 'checkbox'" 
                color="blue"
                >
                </v-checkbox>
                    <!-- {{sectionFields}} -->
                </div>

        </div>
</template>

<script>
export default{
    name: 'submoduleSection',
    props: ['fields'],
    data: function(){
        return{
            sectionFields: this.fields.fields
        }
    },
    methods: {

    }
}
</script>

<style>

</style>