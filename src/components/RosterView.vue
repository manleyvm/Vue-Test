<template>
    <v-container>
        <h2>Roster</h2>
        <div>{{ rosters }} </div>

    </v-container>
</template>

<script>

  export default {
    props:['rosters']
  }
</script>