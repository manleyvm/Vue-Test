<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex text-center>
                            <router-link to="/wave">Go to wave</router-link>
                            <router-link to="/roster">Go to roster</router-link>
                <router-link to="/bar">Go to Bar</router-link>
            <router-view></router-view>
            <!-- <v-select :items="shifts" item-value="id" item-text="startTime"></v-select> -->

            
            <!-- <Chart :chartData="somedata"></Chart> -->
            <!-- <RandomChart></RandomChart> -->
            <!-- {{ somedata }} -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import WaveGrid from './components/WaveGrid'
// import Chart from './components/Chart'
// import RandomChart from './components/RandomChart'
  export default {
    // components:{WaveGrid
    // ,RandomChart
    // },
    props: {
      source: String,
    },

    data: () => ({
      drawer: null
      
      
      
      ,shifts:[{id:1,startTime:'2019-08-09T23:00:00'}]
      ,waves:[]
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