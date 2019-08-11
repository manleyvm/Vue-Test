<template>
      <tr :key="item.id"
      v-bind:class="{'green':item.status.value==90,'orange':item.status.value==5,'grey':item.status.value==99}"
      >
        <td class="text-left">{{ item.id }}</td>
        <td class="text-left">{{ item.text }}</td>
        <td class="text-left">{{ item.stores }}</td>
        <td class="text-left">{{ item.volume.pickables }}<span v-if="!item.volume.isActual">*</span></td>
        <td class="text-left">{{ item.volume.fpp }}<span v-if="!item.volume.isActual">*</span></td>
        <td class="text-left">{{ item.stageBy.min | moment("HH:mm") }} <span v-if="stageByMinDiff">{{ (stageByMinDiff > 0 ? '+' : '') + stageByMinDiff }}</span>



        </td>
        <td class="text-left">{{ item.stageBy.max | moment("HH:mm") }}</td>
        <td class="text-left">{{ item.waveBy | moment("HH:mm")}} </td>
        <td class="text-left">{{ item.status.text }}</td>
        <td class="text-left">{{ item.waveNbr }}</td>
        
        
      </tr>
</template>

<script>

  export default {
      props:['item']
      ,computed : {  stageByMinDiff : function()  {
          return this.$moment.duration((this.$moment(this.item.stageBy.min,this.$moment.ISO_8601)).startOf('day').diff((this.$moment()).startOf('day'))).asDays()
      }
      }/*
    ,methods : {
        getDaysDiff: function(d){


            var val = this.$moment.duration((this.$moment(d.stageBy.min,this.$moment.ISO_8601)).startOf('day').diff((this.$moment()).startOf('day'))).asDays()
            // console.log(val);
            // return this.$moment.duration(d.diff)
        }
    }*/
  }
</script>