<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="grid">
        <div class="hero-left">
          <div class="eyebrow">
            <span class="dot"></span>
            <span>{{ t('hero.eyebrow') }}</span>
            <span class="sep"></span>
            <span>{{ t('hero.eyebrow2') }}</span>
          </div>
          
          <i18n-t keypath="hero.headline" tag="h1" class="headline">
            <template #money>
              <em>{{ t('hero.headline_money') }}</em>
            </template>
            <template #scale>
              <span class="muted">{{ t('hero.headline_scale') }}</span>
            </template>
          </i18n-t>
          
          <p class="lede">{{ t('hero.lede') }}</p>
          
          <div class="hero-actions">
            <a class="btn primary" href="#work">
              <span>{{ t('hero.cta1') }}</span>
              <span class="arrow">→</span>
            </a>
            <a class="btn ghost" href="#contact">
              <span>{{ t('hero.cta2') }}</span>
            </a>
          </div>

          <div class="hero-meta">
            <div class="cell">
              <div class="k">{{ t('meta.focus') }}</div>
              <div class="v">{{ t('meta.focusV') }}</div>
            </div>
            <div class="cell">
              <div class="k">{{ t('meta.stack') }}</div>
              <div class="v">{{ t('meta.stackV') }}</div>
            </div>
            <div class="cell">
              <div class="k">{{ t('meta.avail') }}</div>
              <div class="v">{{ t('meta.availV') }}</div>
            </div>
          </div>
        </div>

        <HeroGraph />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: 88px 0 96px; }
.hero .grid {
  display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 64px; align-items: start;
}
.eyebrow {
  display:inline-flex; align-items:center; gap: 10px;
  font-family: var(--font-mono); font-size: 11px;
  color: var(--text-3); letter-spacing: 0.06em;
  margin-bottom: 28px;
}
.eyebrow .dot { width:6px; height:6px; border-radius:50%; background: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
.eyebrow .sep { width: 24px; height:1px; background: var(--border-strong); }
:deep(h1.headline) {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: clamp(38px, 4.6vw, 64px);
  line-height: 1.04;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin: 0 0 28px;
  text-wrap: balance;
}
:deep(h1.headline em) {
  font-style: normal;
  color: var(--text-1);
  background: linear-gradient(120deg, var(--accent-2), var(--accent) 90%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
}
:deep(h1.headline .muted) { color: var(--text-3); }
.lede {
  font-size: 17px; line-height: 1.6;
  color: var(--text-2); max-width: 540px;
  margin: 0 0 36px;
}
.hero-actions { display:flex; align-items:center; gap: 12px; flex-wrap: wrap; }

/* hero meta strip below the lede */
.hero-meta {
  margin-top: 48px;
  display: grid; grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 24px; max-width: 540px;
}
.hero-meta .cell { border-left: 1px solid var(--border); padding-left: 14px; }
.hero-meta .k { font-family: var(--font-mono); font-size: 10px; color: var(--text-4); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
.hero-meta .v { font-size: 13px; color: var(--text-2); }

@media (max-width: 880px) {
  .hero { padding: 56px 0 72px; }
  .hero .grid { grid-template-columns: 1fr; gap: 36px; }
  .hero-meta { grid-template-columns: 1fr 1fr; gap: 18px; }
  :deep(h1.headline) { font-size: 36px; }
}
</style>
