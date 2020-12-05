<template>
  <div class="container mx-auto py-4 text-white">
    <ListSurvivors v-if="typeof survivor === 'undefined'" @survivor="onSurvivor" />
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'

  import { EquipmentInfo, EquipmentInfos, ItemInfo, ItemInfos, SurvivorInfo, SurvivorInfos } from './data'
  import { survivors, items, equipment } from './data'

  import ListSurvivors from './components/ListSurvivors.vue'

  @Options({
    name: 'App',
    components: {
      ListSurvivors,
    },
  })
  export default class App extends Vue {
    pvt_equiped = ''
    pvt_survivor = ''
    pvt_stacks = new Map<string, number>()

    get items(): ItemInfos {
      return items
    }

    get equipment(): EquipmentInfos {
      return equipment
    }

    get survivors(): SurvivorInfos {
      return survivors
    }

    get equiped(): EquipmentInfo | undefined {
      return equipment[this.pvt_equiped]
    }

    get survivor(): SurvivorInfo | undefined {
      return survivors[this.pvt_survivor]
    }

    onSurvivor(id: string) {
      console.log(id)
    }
  }
</script>
