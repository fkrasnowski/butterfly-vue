<!-- Example butterfly endpoint -->
<script setup lang="ts">
import { vSimulateMouseEvents } from '../butterfly-vue'
const { id } = defineProps<{ id: string }>()
</script>

<template>
  <div :id="id" class="wrapper" v-simulate-mouse-events="true">
    <v-tooltip anchor="top">
      <template #activator="{ props }">
        <div class="dot" v-bind="props">
          <div class="inner-dot" />
        </div>
      </template>
      <span>Endpoint: `{{ id }}` </span>
    </v-tooltip>
  </div>
</template>

<style scoped>
* {
  transition: transform 0.2s;
}

.wrapper {
  position: absolute;
  display: grid;
  place-content: center;
  width: 25px;
  height: 25px;
}
.dot {
  display: grid;
  place-content: center;
  width: 12px;
  height: 12px;
  border-radius: 1000px;
  background-color: rgb(248, 160, 204);
}
.wrapper:hover .dot {
  transform: scale(2);
}

.wrapper:hover .inner-dot {
  transform: scale(0.4);
}
.inner-dot {
  width: 12px;
  height: 12px;
  border-radius: 1000px;
  background-color: hotpink;
}
</style>
