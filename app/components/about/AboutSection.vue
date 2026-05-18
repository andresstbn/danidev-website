<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="about" id="about">
    <div class="container">
      <div class="grid">
        <div class="portrait" aria-label="Portrait of Daniel A. Esteban">
          <NuxtImg src="/img/portrait.jpg" alt="Daniel A. Esteban" loading="lazy" format="webp" quality="78" />
          <span class="tag">{{ t('about.tag') }}</span>
        </div>
        <div class="body">
          <div class="eyebrow">
            <span class="dot"></span>
            <span>{{ t('about.eyebrow') }}</span>
          </div>
          <h3>{{ t('about.title') }}</h3>
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
          <div class="meta">
            <span>{{ t('about.m1') }}</span>
            <span>{{ t('about.m2') }}</span>
            <span>{{ t('about.m3') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about { padding: 72px 0 64px; border-top: 1px solid var(--border); }
.about .grid { display: grid; grid-template-columns: 220px 1fr; gap: 56px; align-items: start; }
.portrait {
  position: relative;
  width: 220px; height: 290px; border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: var(--bg-2);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.05),
    0 30px 60px -20px rgba(0,0,0,0.55),
    0 0 0 8px rgba(255,255,255,0.012);
}
.portrait img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: saturate(0.55) contrast(1.04) brightness(0.92);
  transition: filter .35s ease;
}
.portrait:hover img { filter: saturate(0.9) contrast(1.02) brightness(0.98); }
.portrait::after {
  content:''; position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(120% 80% at 50% 0%, transparent 50%, rgba(9,9,11,0.35) 100%),
    linear-gradient(180deg, transparent 65%, rgba(9,9,11,0.45));
}
.portrait .tag {
  position: absolute; left: 10px; bottom: 10px; z-index: 1;
  font-family: var(--font-mono); font-size: 10px; color: var(--text-2);
  letter-spacing: 0.06em; text-transform: uppercase;
  padding: 4px 8px; border-radius: 4px;
  background: rgba(9,9,11,0.55);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.06);
}
.about .body .eyebrow { margin-bottom: 18px; display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--text-3); letter-spacing: 0.06em;}
.about .body .eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.about .body h3 {
  margin: 0 0 18px; font-size: clamp(22px, 2vw, 28px); font-weight: 500;
  color: var(--text-1); letter-spacing: -0.015em; line-height: 1.25;
  max-width: 620px;
}
.about .body h3 .muted { color: var(--text-3); }
.about .body p { color: var(--text-2); font-size: 15px; line-height: 1.65; max-width: 620px; margin: 0 0 12px; }
.about .body .meta {
  margin-top: 22px; display: flex; gap: 22px; flex-wrap: wrap;
  font-family: var(--font-mono); font-size: 11px; color: var(--text-3);
}
.about .body .meta span { display: inline-flex; gap: 8px; align-items:center; }
.about .body .meta span::before {
  content:''; width:5px; height:5px; background: var(--accent); border-radius:50%;
  box-shadow: 0 0 0 3px var(--accent-soft);
}

@media (max-width: 880px) {
  .about { padding: 56px 0 48px; }
  .about .grid { grid-template-columns: 1fr; gap: 24px; }
  .portrait { width: 180px; height: 230px; }
}
</style>
