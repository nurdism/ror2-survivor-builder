<template>
  <div class="">
    <template v-for="(survivor, index) in survivors" :key="index">
      <div class="flex flex-row flex-wrap min-h-20 pb-1 px-2">
        <div @click="$emit('survivor', survivor.id)">{{ survivor.name }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component'

  import { SurvivorInfo } from '../data'
  import { survivors } from '../data'

  @Options({
    name: 'ListSurvivors',
    emits: ['survivor'],
  })
  export default class App extends Vue {
    get survivors(): SurvivorInfo[] {
      return Object.values(survivors)
    }
  }
</script>
