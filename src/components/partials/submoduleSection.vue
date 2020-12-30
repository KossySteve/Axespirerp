<template>
        <div>
                <span class="title blue--text d-flex justify-center pb-5">
                  {{ fields.name }} 
                </span>

                <div v-for="(item, index) in sectionFields" :key="index">
                  {{createModels(item)}}
                    <!-- {{item}} -->
                    <v-text-field @keyup="updateParent(item)" v-if="item.type === 'text'" v-model="data[item.model]" color="blue" :label="item.label" outlined></v-text-field>
                    
                    <v-textarea @keyup="updateParent(item)" v-if="item.type === 'textarea'"  v-model="data[item.model]" color="blue" class="" outlined>
                  <template v-slot:label>
                    <div>{{item.label}} <small>(info about item)</small></div>
                  </template>
                </v-textarea>

                <v-checkbox
                :label="item.label"
                v-model="data[item.model]"
                v-if="item.type === 'checkbox'" 
                color="blue"
                @click="updateParent(item)"
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
            sectionFields: this.fields.fields,
            data: {}
        }
    },
    methods: {
      createModels(item){
        console.log("list item")
        console.log(item)
        console.log("list item")
        // console.log(item.type);
        this.data[item.model] = "";
        // console.log(this.data)

        // send an event to parent to create an entry
        this.$emit('createData', item);
      },
      showData(){
        console.log(this.data)
      },
      updateParent(item){
        item['value'] = this.data[item.model];
        // console.log("****update parent****: " + JSON.stringify(item));
        this.$emit('updateData', item);
      }
    },
    mounted(){
      console.log(this.data);
      this.$parent.$on('clearChildren', ()=>{
        console.log("event fired");
      })
    }
}
</script>

<style>

</style>