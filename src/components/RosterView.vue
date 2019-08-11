<template>
    <v-container>
        <h2>Roster</h2>
        <!-- <div>{{ rosters }} </div> -->
        <v-select :items="shifts" item-value="id" item-text="startTime" label="Shift" v-model="settings.shift" clearable></v-select>
        
        <v-menu
        :close-on-content-click="true"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="inStoreDate"
            label="In Store Date"
            prepend-icon="mdi-calendar"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="inStoreDate"></v-date-picker>
      </v-menu>
        <v-icon color="green" v-on:click="moveInStoreDate(-1)">mdi-minus</v-icon>
        <v-icon color="red" v-on:click="moveInStoreDate(1)">mdi-plus</v-icon>
      
        <roster-grid :rosters="filteredRosters" :settings="settings"></roster-grid>

    </v-container>
</template>

<script>
import RosterGrid from './RosterGrid.vue'
  export default {
    components:{RosterGrid}
    ,data: () => ({
        inStoreDate:null
    })    ,computed:{
        filteredRosters : function(){
            let t = this
            return this.rosters.filter(
                function(r){
                    // if(this == undefined || this.inStoreDate == undefined)
                        // return true;

                    return (t.$moment(r.inStoreDate).format('YYYY-MM-DD') == t.inStoreDate || t.inStoreDate == null  )

                }
            )
        }
    },methods:{
        moveInStoreDate : function(a){
            this.inStoreDate = this.$moment(this.inStoreDate).add(a, 'days').format('YYYY-MM-DD');
        }
    }
    ,props:['rosters','settings','shifts']
  }
</script>