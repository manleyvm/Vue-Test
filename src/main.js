import 'babel-polyfill'
import Vue from 'vue'
import VueMoment from 'vue-moment'
// import App from './App.vue'
import BasicApp from './BasicApp.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

// import wg from './components/WaveGrid.vue'
import ch from  './components/LineChart'
import WaveView from './components/WaveView.vue'
import RosterView from './components/RosterView.vue'


const wms = {
       shifts:[{id:1,startTime:'2019-08-09T23:00:00'}]
      // ,shift:null
      // ,held:false,statuses:[{value:0,text:'Ready'},{value:95,text:'Held'},{value:99,text:'Cancelled'}]
      ,settings:{wave:{shift:null,held:false},roster:{statuses:[{value:0,text:'Ready'},{value:95,text:'Held'},{value:99,text:'Cancelled'}]}}
      ,waves:[
           {id:1121,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 1',stores:10,stageBy:{min:'2019-08-09T23:00:00',max:'2008-09-02T06:00:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101001',waveBy:'2008-09-02T06:00:00'}
          ,{id:4322,volume:{pickables:6789,fpp:13,isActual:true},text:'Wave Grp 2',stores:10,stageBy:{min:'2019-08-10T11:00:00',max:'2008-09-02T12:15:00'},status:{value:90,text:'Waved'}     ,waveNbr:'20190101003',waveBy:'2008-09-02T06:00:00'}
          ,{id:4323,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 3',stores:10,stageBy:{min:'2019-08-10T12:00:00',max:'2008-09-02T13:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4324,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 4',stores:10,stageBy:{min:'2019-08-10T14:00:00',max:'2008-09-02T17:45:00'},status:{value:5,text:'Held'}       ,waveNbr:null         ,waveBy:null}
          ,{id:4325,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 5',stores:10,stageBy:{min:'2019-08-10T18:00:00',max:'2008-09-02T20:00:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4326,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 6',stores:10,stageBy:{min:'2019-08-10T22:00:00',max:'2008-09-03T01:45:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          ,{id:4327,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 7',stores:10,stageBy:{min:'2019-08-11T01:00:00',max:'2008-09-03T04:00:00'},status:{value:99,text:'Cancelled'} ,waveNbr:null         ,waveBy:null}
          ,{id:4328,volume:{pickables:6789,fpp:13,isActual:false},text:'Wave Grp 8',stores:10,stageBy:{min:'2019-08-11T03:00:00',max:'2008-09-03T04:30:00'},status:{value:10,text:'Queued'}    ,waveNbr:null         ,waveBy:null}
          
          
          ],rosters: [
            {id:1, store:'1111',waveBy:'2008-09-02T15:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null,loadGrp:null,waveGrp:null,waveId:4646,inStoreDate:'2019-08-14T00:00:00'}
        ,   {id:2, store:'2222',waveBy:'2008-09-15T12:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null,loadGrp:null,waveGrp:null,waveId:null,inStoreDate:'2019-08-14T00:00:00'}
        ,   {id:3, store:'3333',waveBy:'2008-09-15T13:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null,loadGrp:null,waveGrp:null,waveId:7745,inStoreDate:'2019-08-15T00:00:00'}
        ,   {id:4, store:'4444',waveBy:'2008-09-15T17:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null,loadGrp:null,waveGrp:null,waveId:null,inStoreDate:'2019-08-16T00:00:00'}
        ,   {id:5, store:'5555',waveBy:'2008-09-15T08:53:00',ruleTemplates:[],status:0,waveTemplateId:null,ruleTemplateId:null,loadGrp:null,waveGrp:null,waveId:null,inStoreDate:'2019-08-16T00:00:00'}
        

        ]

}


Vue.config.productionTip = false
Vue.use(VueMoment)
Vue.use(VueRouter)
const routes = [
  { path: '/wave', component: WaveView ,props: {waves: wms.waves, shifts:wms.shifts,settings: wms.settings.wave}},
  { path: '/roster', component: RosterView,props: {rosters: wms.rosters, shifts:wms.shifts,settings:wms.settings.roster} },
  { path: '/bar', component: ch }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,router,
  render: h => h(BasicApp)
}).$mount('#app')
