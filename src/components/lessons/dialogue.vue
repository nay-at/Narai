<script setup lang="ts">
import { ref } from 'vue'
import SectionsWrapper from './sections/sectionsWrapper.vue'

const sectionHtml = ref('')
const props = defineProps({
  markdownFile: { type: String, required: true }
})
</script>

<template>
  <SectionsWrapper
    sectionTitle="# Dialogue"
    :markdownFile="props.markdownFile"
    @update:section="sectionHtml = $event"
  />
  <div class="preview" v-html="sectionHtml"></div>
</template>
