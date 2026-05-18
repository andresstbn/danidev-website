<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="foot" id="contact">
    <div class="container">
      <div class="foot-row">
        <div class="colophon">
          <div style="color:var(--text-2);margin-bottom:8px;font-family:var(--font-sans);font-size:13px">Daniel A. Esteban</div>
          <div>{{ t('foot.colophon') }}</div>
          <div style="margin-top:14px; color:var(--text-3)">daestebanc@gmail.com</div>
        </div>
        <div class="foot-links">
          <a href="#work">{{ t('nav.work') }}</a>
          <a href="#expertise">{{ t('nav.expertise') }}</a>
          <a href="#writing">{{ t('nav.writing') }}</a>
          <a href="https://github.com/andresstbn" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="https://linkedin.com/in/andresstbn" target="_blank" rel="noopener">LinkedIn ↗</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer.foot {
  border-top: 1px solid var(--border);
  padding: 56px 0 80px;
  margin-top: 40px;
}
.foot-row {
  display:flex; justify-content: space-between; align-items: flex-start; gap: 40px;
}
.foot-row .colophon {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-4);
  letter-spacing: 0.04em;
  max-width: 360px; line-height: 1.7;
}
.foot-links { display:flex; gap: 28px; font-size: 13px; color: var(--text-3); }
.foot-links a { transition: color .15s; }
.foot-links a:hover { color: var(--text-1); }

@media (max-width: 880px) {
  .foot-row { flex-direction: column; gap: 24px; }
}
</style>
