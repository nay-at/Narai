<script setup lang="ts">
import navLevel from '../components/navLevel.vue'
import Grammar from '../components/lessons/grammar.vue'
import Dialogue from '../components/lessons/dialogue.vue'
import DialogueVocabulary from '../components/lessons/vocabularyDialogue.vue'
import Vocabulary from '../components/lessons/vocabulary.vue'
const markdownFile = 'src/content/jp/lesson/exemple.md'

const categorie = ['# Dialogue', '## Vocabulaire', '# Grammaire', '# Vocabulaire']
</script>

<template>
  <div class="container_list">
    <div class="nav_level"><navLevel /></div>

    <!-- <div v-for="cat in categorie">
      <h1 style="color: white">{{ cat }}</h1>
</div> -->

    <Dialogue :markdownFile="markdownFile"></Dialogue>
    <DialogueVocabulary :markdownFile="markdownFile"></DialogueVocabulary>
    <Grammar :markdownFile="markdownFile"></Grammar>
    <Vocabulary :markdownFile="markdownFile"></Vocabulary>
  </div>
</template>

<script lang="ts">
export default {
  init() {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.markdown-viewer {
  padding: 20px;
}

.preview {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background: #f9f9f9;
}

/* Styles optionnels pour le Markdown */
.preview h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.preview h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}
.preview p {
  margin-bottom: 1em;
}
.preview code {
  background: #eee;
  padding: 2px 5px;
  border-radius: 3px;
}
.preview pre {
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
</style>
