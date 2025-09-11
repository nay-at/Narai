<script setup lang="ts">
import { ref, onMounted } from 'vue'

// props
const props = defineProps({
  sectionTitle: { type: String, required: true },
  markdownFile: { type: String, required: true }
})

// declare emitter
const emit = defineEmits<{
  (e: 'update:section', content: string): void
}>()

// state
const rawMarkdown = ref('')

// fetch markdown
onMounted(async () => {
  const response = await fetch(props.markdownFile)
  rawMarkdown.value = await response.text()

  // emit to parent once loaded
  emit('update:section', rawMarkdown.value)
})
</script>
