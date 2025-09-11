<script setup lang="ts">
const props = defineProps({
  template: { type: String, required: true }
})

const lists: Record<string, string[]> = {
  Name: ['マリー', '田中先生', '佐藤'],
  Job: ['銀行員', '中国人', '韓国人']
}

function fillTemplate(lists: Record<string, string[]>) {
  return props.template.replace(/\[(\w+)\]/g, (_, key) => {
    const options = lists[key]
    if (!options || options.length === 0) return `[${key}]` // fallback si liste vide

    const value = options[Math.floor(Math.random() * options.length)]
    return `<b>${value}</b>` // valeur mise en gras
  })
}
</script>

<template lang="">
  <div v-html="fillTemplate(lists)"></div>
</template>
<style lang=""></style>
