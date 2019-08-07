<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Store</th>
        <th class="text-left">Status</th>
        <th class="text-left">WaveBy</th>
        <th class="text-left">WaveTemplate</th>
        <th class="text-left">RuleTemplate</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rosters" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.store }}</td>
        <td>{{ item.waveBy | moment("DD/MM HH:mm") }}</td>
        <td><v-select
            v-model="item.status"
          :items="statuses"
        ></v-select></td>
        <td>
            <v-select   v-model="item.waveTemplateId"          :items="waveTemplates"  v-on:change="setRuleTemplates(item)"></v-select>
        </td>
        <td><v-select   v-model="item.ruleTemplateId"          :items="item.ruleTemplates" multiple></v-select></td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
  export default {

    methods: {
        setRuleTemplates: function(item) {
            // wt = this.$data.waveTemplates
            // arr = wt.filter(function(a) { return a.value == item.waveTemplateId})[0].ruleTemplates;
             //item.ruleTemplates = JSON.parse(JSON.stringify([{value:5555,text:'Produce'},{value:6666,text:'Ambient'}]));//this.waveTemplates.filter(a => { return a.value == item.waveTemplateId})[0].ruleTemplates;
             item.ruleTemplates = this.waveTemplates.filter( function(a) { return a.value == item.waveTemplateId})[0].ruleTemplates;

            

            // item.ruleTemplates = JSON.parse(JSON.stringify(this.waveTemplates.filter(a => { return a.value == item.waveTemplateId})[0].ruleTemplates));//;
            // return null;
            // item.ruleTemplates = [];
            // for(var n; n<arr.length;n++){
                // item.ruleTemplates.push({value:arr[n].value,text:arr[n].text});
            // }

        }
    },

    data () {
      return {

        waveTemplates:[{value:100,text:'All Stores',ruleTemplates:[{value:5555,text:'Produce'},{value:6666,text:'Ambient'}]}]
        ,ruleTemplates:{100:[{value:5555,text:'Produce'},{value:6666,text:'Ambient'}]}
        ,statuses:[{value:0,text:'Ready'},{value:95,text:'Held'},{value:99,text:'Cancelled'}]
        ,rosters: [
            {id:1, store:'1111',waveBy:'2008-09-02T15:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:2, store:'2222',waveBy:'2008-09-15T12:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:3, store:'3333',waveBy:'2008-09-15T13:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:4, store:'4444',waveBy:'2008-09-15T17:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:5, store:'5555',waveBy:'2008-09-15T08:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        

        ]
      }
    }
  }
</script>