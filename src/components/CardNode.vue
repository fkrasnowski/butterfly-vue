<!-- Example butterfly node -->
<script setup lang="ts">
import { ref } from 'vue'
import { NodeData } from '../butterfly-vue'

const { id, top, left } =
  defineProps<{ id: string; top: number; left: number; nodeData: NodeData }>()

const emit = defineEmits<{
  (event: 'delete'): void
  (event: 'update:node-data', data: NodeData): void
}>()

const isColorPickerOpen = ref(false)
</script>

<template>
  <v-card :id="id" class="card" :color="nodeData.color">
    <v-card-header>
      <v-card-header-text>Node {{ id }}</v-card-header-text>
    </v-card-header>
    <v-card-text> x: {{ top }} y: {{ left }} </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="red" @click="emit('delete')">Delete</v-btn>
      <v-dialog v-model="isColorPickerOpen">
        <template #activator="{ props }">
          <v-btn color="deep-purple" v-bind="props">Color</v-btn>
        </template>
        <v-card>
          <v-card-header>
            <v-card-header-text>Pick color</v-card-header-text>
          </v-card-header>
          <v-card-text>Pick color of the node card</v-card-text>
          <v-card-actions @click="isColorPickerOpen = false">
            <v-btn
              color="black"
              @click="emit('update:node-data', { color: 'black' })"
              >Black</v-btn
            >
            <v-btn
              color="white"
              @click="emit('update:node-data', { color: 'white' })"
              >White</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card {
  position: absolute;
  width: 175px;
}
</style>
