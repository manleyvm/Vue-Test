<template>

  <v-simple-table>
    <thead>

      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Store</th>
        <th class="text-left">Wave By</th>
        
        <th class="text-left">Status</th>
        <th class="text-left">Load Group</th>
        <th class="text-left">Wave Group</th>
        <th class="text-left">Wave Id</th>
            
        
      </tr>
    </thead>
    <tbody>

     <tr v-for="item in rosters" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.store }}</td>
        <td>{{ item.waveBy | moment("DD/MM HH:mm") }}</td>
        <td><v-select
            v-model="item.status"
          :items="settings.statuses"
        ></v-select></td>

        <td><v-text-field v-model="item.loadGrp"></v-text-field></td>
        <td><v-text-field v-model="item.waveGrp"></v-text-field></td>
        <td>{{ item.waveId }}</td>
        <td>{{ item.inStoreDate | moment("DD/MM") }}</td>
        <!-- <td> -->
            <!-- <v-select   v-model="item.waveTemplateId"          :items="waveTemplates"  v-on:change="setRuleTemplates(item)"></v-select> -->
 
        <!-- <td><v-select   v-model="item.ruleTemplateId"          :items="item.ruleTemplates" multiple></v-select></td> -->
      </tr> 
    </tbody>
  </v-simple-table>
</template>

<script>

  export default {
    props:['rosters','settings']

  }
</script>