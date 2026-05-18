<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <article class="role">
    <div class="when">
      <div v-if="$slots.now" class="now"><span class="dot"></span><slot name="now"></slot></div>
      <div><slot name="period"></slot></div>
      <div class="org"><slot name="org"></slot></div>
      <div class="loc"><slot name="loc"></slot></div>
    </div>
    <div class="body">
      <h3><slot name="title"></slot></h3>
      <div class="sub"><slot name="sub"></slot></div>
      <p><slot name="lede"></slot></p>
      <slot name="bullets"></slot>
      <div class="tags">
        <slot name="tags"></slot>
      </div>
    </div>
  </article>
</template>

<style scoped>
.role {
  display: grid; grid-template-columns: 240px 1fr; gap: 40px;
  padding: 28px 0;
  border-top: 1px solid var(--border);
  position: relative;
  transition: background .25s;
}
.role:hover { background: linear-gradient(90deg, transparent, var(--row-hi) 30%, transparent); }
.role:first-child { border-top: 0; padding-top: 0; }
.role .when {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-3);
  letter-spacing: 0.05em;
}
.role .when .now {
  display:inline-flex; align-items:center; gap:6px;
  color: var(--accent); margin-bottom: 6px;
}
.role .when .now .dot { width:6px; height:6px; border-radius:50%; background: var(--accent); box-shadow:0 0 0 3px var(--accent-soft); }
.role .when .org { color: var(--text-2); font-family: var(--font-sans); font-size: 13px; margin-top: 6px; }
.role .when .loc { color: var(--text-4); font-size: 11px; margin-top: 2px; }
.role .body h3 {
  margin: 0 0 6px; font-size: 18px; font-weight: 500;
  color: var(--text-1); letter-spacing: -0.01em;
}
.role .body .sub { color: var(--text-3); font-size: 13px; margin-bottom: 14px; font-family: var(--font-mono); }
.role .body p { margin: 0 0 14px; color: var(--text-2); max-width: 640px; }
:deep(.role .body ul) { margin: 0 0 14px; padding: 0; list-style: none; }
:deep(.role .body ul li) {
  padding-left: 18px; position: relative;
  color: var(--text-2); margin-bottom: 6px;
  max-width: 640px;
}
:deep(.role .body ul li::before) {
  content:''; position:absolute; left: 2px; top: 9px;
  width: 6px; height:1px; background: var(--text-4);
}
.role .tags { display:flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
:deep(.tag) {
  display:inline-block; padding: 3px 8px; border-radius: 5px;
  border: 1px solid var(--border-strong); color: var(--text-3);
  font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.02em;
}
:deep(.tag.hot) { color: var(--accent); border-color: var(--accent-line); background: var(--accent-soft); }

@media (max-width: 880px) {
  .role { grid-template-columns: 1fr; gap: 14px; padding: 24px 0; }
}
</style>
