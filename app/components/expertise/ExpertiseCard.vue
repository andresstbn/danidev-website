<script setup lang="ts">
defineProps<{
  num: string
  title: string
  items: Array<{ text: string; mono?: string }>
  hotLabel?: string
}>()
</script>

<template>
  <div class="skill-card">
    <div class="num">{{ num }}</div>
    <h4>{{ title }}</h4>
    <ul>
      <li v-for="(item, i) in items" :key="i">
        {{ item.text }}
        <span v-if="item.mono" class="mono">{{ item.mono }}</span>
      </li>
    </ul>
    <div v-if="hotLabel" class="hot">{{ hotLabel }}</div>
  </div>
</template>

<style scoped>
.skill-card {
  background: var(--bg);
  padding: 24px 24px 26px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  transition: background .2s;
}
.skill-card:hover { background: var(--bg-2); }
.num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-4);
  letter-spacing: 0.08em;
}
h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-1);
  letter-spacing: -0.005em;
}
ul { list-style: none; margin: 0; padding: 0; }
ul li {
  color: var(--text-2);
  font-size: 13px;
  padding: 4px 0;
  border-bottom: 1px dashed transparent;
}
ul li .mono {
  font-family: var(--font-mono);
  color: var(--text-3);
  font-size: 11px;
  margin-left: 6px;
}
.hot {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--accent);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
