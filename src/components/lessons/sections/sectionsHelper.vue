<script setup lang="ts">
import { marked } from 'marked'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  sectionTitle: { type: String, required: true },
  markdownFile: { type: String, required: true }
})

const emit = defineEmits<{
  (e: 'update:section', value: string): void
}>()

const markdownContent = ref('')
const loading = ref(true)
const error = ref<string | null>(null)

marked.setOptions({ breaks: true })

const extractSection = (content: string, sectionTitle: string) => {
  const lines = content.split('\n')
  let capture = false
  let sectionLines: string[] = []

  const match = sectionTitle.match(/^(#+)/)
  const sectionLevel = match ? match[1].length : 0

  for (let line of lines) {
    const lineMatch = line.match(/^(#+)\s*(.*)/)
    if (lineMatch) {
      const [_, hashes] = lineMatch
      const level = hashes.length

      if (line === sectionTitle) {
        capture = true
        continue
      }

      if (capture && level <= sectionLevel) break
      if (capture && level > sectionLevel) break
    }

    if (capture) sectionLines.push(line)
  }

  return sectionLines.join('\n')
}

const extractedSection = computed(() => extractSection(markdownContent.value, props.sectionTitle))
const renderedSection = computed(() => marked.parse(extractedSection.value))

watch(renderedSection, (newVal) => {
  emit('update:section', newVal)
})

const loadMarkdown = async () => {
  loading.value = true
  try {
    const response = await fetch(props.markdownFile)
    if (!response.ok) throw new Error('Impossible de charger le fichier Markdown')
    markdownContent.value = await response.text()
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(loadMarkdown)
</script>
