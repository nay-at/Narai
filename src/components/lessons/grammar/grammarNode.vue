<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  node: any
}>()
</script>

<template>
  <div style="margin-left: 1em">
    <template v-if="node && typeof node === 'object' && !Array.isArray(node)">
      <div v-for="(value, key) in node" :key="key">
        <b>{{ key }}</b>
        <GrammarNode :node="value" />
      </div>
    </template>

    <template v-else-if="Array.isArray(node)">
      <ul>
        <li v-for="(item, idx) in node" :key="idx">
          <GrammarNode :node="item" />
        </li>
      </ul>
    </template>

    <template v-else>
      <div>{{ node }}</div>
    </template>
  </div>
</template>
