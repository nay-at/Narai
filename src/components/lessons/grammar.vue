<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionsWrapper from './sections/sectionsWrapper.vue'
import GrammarNode from './grammar/grammarNode.vue'
import templateCompletion from './grammar/templateCompletion.vue'

const sectionHtml = ref('')
const props = defineProps({
  markdownFile: { type: String, required: true }
})

function parseGrammarHTML(html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const data: any = {}

  const particleLis = doc.querySelectorAll('ul > li')
  particleLis.forEach((li) => {
    const particleEl = li.querySelector('p > em > strong')
    if (!particleEl) return
    const particle = particleEl.textContent?.trim()
    if (!particle) return

    data[particle] = { explications: '', structure: '', templates: [] }

    const subLis = li.querySelectorAll('ul > li')
    subLis.forEach((subLi) => {
      const strongEl = subLi.querySelector('strong')
      if (!strongEl) return
      const label = strongEl.textContent?.trim() || ''

      if (label === 'Explications :') {
        data[particle].explications = subLi.textContent?.replace('Explications :', '').trim() || ''
      } else if (label === 'Structure :') {
        data[particle].structure = subLi.textContent?.replace('Structure :', '').trim() || ''
      } else if (label === 'Templates :') {
        const templateLis = subLi.querySelectorAll('ul > li')
        data[particle].templates = Array.from(templateLis).map((t) => t.textContent?.trim() || '')
      }
    })
  })

  return data
}


</script>

<template>
  <SectionsWrapper
    sectionTitle="# Grammaire"
    :markdownFile="props.markdownFile"
    @update:section="sectionHtml = $event"
  />

  <div class="preview">
    <div v-for="(content, grammar) in parseGrammarHTML(sectionHtml)">
      {{ grammar }}<br></br>
      {{ content.explications }}<br></br>
      {{ content.structure }}<br></br>
      <templateCompletion v-for="el in content.templates" :template="el"></templateCompletion>
      
    </div>
    <!-- <GrammarNode :node="parseGrammarHTML(sectionHtml)" /> -->
  </div>
</template>
