<script setup lang="ts">
import { ref } from 'vue'
import sectionsHelper from './sectionsHelper.vue'

const props = defineProps({
  sectionTitle: { type: String, required: true },
  markdownFile: { type: String, required: true }
})

// 🔹 Ici on redéclare un emit
const emit = defineEmits<{
  (e: 'update:section', value: string): void
}>()

// Données locales si besoin
const sectionHtml = ref('')
</script>

<template>
  <sectionsHelper
    :sectionTitle="sectionTitle"
    :markdownFile="markdownFile"
    @update:section="
      (val) => {
        sectionHtml = val
        emit('update:section', val)
      }
    "
  />
</template>
