<template>

  <v-simple-table>
    <thead>
      <tr>
        <th colspan="3">&nbsp;</th>
        <th colspan="2" class="text-center">Volume</th>
        <th colspan="2" class="text-center">Stage By</th>
        <th colspan="3">&nbsp;</th>
      </tr>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Description</th>
        <th class="text-left">Stores</th>
        <th class="text-left">Pickables</th>
        <th class="text-left">FPP</th>
        <th class="text-center">First</th>
        <th class="text-center">Last</th>
        <th class="text-left">Wave By</th>
        <th class="text-left">Status</th>
        <th class="text-left">Wave Number</th>
        
      </tr>
    </thead>
    <tbody>
      <wave-grp-row v-for="item in items" v-bind:key="item.id" :item="item"></wave-grp-row>

      <!-- <tr v-for="item in rosters" :key="item.id">
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
      </tr> -->
    </tbody>
  </v-simple-table>
</template>

<script>
  import WaveGrpRow from './WaveGrpRow'
  export default {
    components:{WaveGrpRow},
    props:['items'],
    methods: {
        setRuleTemplates: function(item) {
             item.ruleTemplates = this.waveTemplates.filter( function(a) { return a.value == item.waveTemplateId})[0].ruleTemplates;
        }
    },

    data : function() {
      return {/*
        waveGrps : [
           {id:4321,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 1',stores:10,stageBy:{min:'2019-08-09T23:00:00',max:'2008-09-02T06:00:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101001',waveBy:'2008-09-02T06:00:00'}
          ,{id:4322,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 2',stores:10,stageBy:{min:'2019-08-10T11:00:00',max:'2008-09-02T12:15:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101003',waveBy:'2008-09-02T06:00:00'}
          ,{id:4323,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 3',stores:10,stageBy:{min:'2019-08-10T12:00:00',max:'2008-09-02T13:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4324,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 4',stores:10,stageBy:{min:'2019-08-10T14:00:00',max:'2008-09-02T17:45:00'},status:{value:5,text:'Held'}       ,waveNbr:null         ,waveBy:null}
          ,{id:4325,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 5',stores:10,stageBy:{min:'2019-08-10T18:00:00',max:'2008-09-02T20:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4326,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 6',stores:10,stageBy:{min:'2019-08-10T22:00:00',max:'2008-09-03T01:45:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4327,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 7',stores:10,stageBy:{min:'2019-08-11T01:00:00',max:'2008-09-03T04:00:00'},status:{value:99,text:'Cancelled'} ,waveNbr:null         ,waveBy:null}
          ,{id:4328,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 8',stores:10,stageBy:{min:'2019-08-11T03:00:00',max:'2008-09-03T04:30:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          
          
          ]
        ,*/waveTemplates:[{value:100,text:'All Stores',ruleTemplates:[{value:5555,text:'Produce'},{value:6666,text:'Ambient'}]}]
        ,ruleTemplates:{100:[{value:5555,text:'Produce'},{value:6666,text:'Ambient'}]}
        ,statuses:[{value:0,text:'Ready'},{value:95,text:'Held'},{value:99,text:'Cancelled'}]
        ,rosters: [
            {id:1, store:'1111',waveBy:'2008-09-02T15:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:2, store:'2222',waveBy:'2008-09-15T12:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:3, store:'3333',waveBy:'2008-09-15T13:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:4, store:'4444',waveBy:'2008-09-15T17:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        ,   {id:5, store:'5555',waveBy:'2008-09-15T08:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null}
        

        ]
      };
    }
  }
</script>