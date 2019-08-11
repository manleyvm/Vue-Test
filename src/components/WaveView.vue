<template>
    <v-container>
        <h2>Wave</h2>

        <v-select :items="shifts" item-value="id" item-text="startTime" label="Shift"></v-select>
        <v-switch label="Hold Waving" color="red" v-model="settings.held"></v-switch>
        <wave-grid :items="waves"></wave-grid>
    </v-container>
</template>

<script>
import WaveGrid from './WaveGrid'
// import Chart from './components/Chart'
// import RandomChart from './components/RandomChart'
  export default {
    components:{WaveGrid
    // ,RandomChart
    },
    props: ['waves','settings','shifts'],

    data: () => ({
      drawer: null
      /*
      ,shifts:[{id:1,startTime:'2019-08-09T23:00:00'}]
      ,waves:[
           {id:1121,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 1',stores:10,stageBy:{min:'2019-08-09T23:00:00',max:'2008-09-02T06:00:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101001',waveBy:'2008-09-02T06:00:00'}
          ,{id:4322,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 2',stores:10,stageBy:{min:'2019-08-10T11:00:00',max:'2008-09-02T12:15:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101003',waveBy:'2008-09-02T06:00:00'}
          ,{id:4323,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 3',stores:10,stageBy:{min:'2019-08-10T12:00:00',max:'2008-09-02T13:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4324,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 4',stores:10,stageBy:{min:'2019-08-10T14:00:00',max:'2008-09-02T17:45:00'},status:{value:5,text:'Held'}       ,waveNbr:null         ,waveBy:null}
          ,{id:4325,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 5',stores:10,stageBy:{min:'2019-08-10T18:00:00',max:'2008-09-02T20:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4326,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 6',stores:10,stageBy:{min:'2019-08-10T22:00:00',max:'2008-09-03T01:45:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4327,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 7',stores:10,stageBy:{min:'2019-08-11T01:00:00',max:'2008-09-03T04:00:00'},status:{value:99,text:'Cancelled'} ,waveNbr:null         ,waveBy:null}
          ,{id:4328,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 8',stores:10,stageBy:{min:'2019-08-11T03:00:00',max:'2008-09-03T04:30:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          
          
          ]*/
      , somedata:{
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
    }),
  }
</script>