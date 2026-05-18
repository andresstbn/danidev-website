<script setup lang="ts">
import { useScrollNavState } from '~/composables/useScrollNavState'

const { isScrolled } = useScrollNavState()
const { t, setLocale, locale } = useI18n()
</script>

<template>
  <nav class="top" :class="{ scrolled: isScrolled }">
    <div class="inner">
      <NuxtLink to="/" class="brand">
        <span class="glyph">D</span>
        <span class="name">Daniel A. Esteban</span>
        <span class="dot">·</span>
        <span class="role">{{ t('brand.role') }}</span>
      </NuxtLink>
      <div class="nav-links">
        <a href="#work">{{ t('nav.work') }}</a>
        <a href="#expertise">{{ t('nav.expertise') }}</a>
        <a href="#writing">{{ t('nav.writing') }}</a>
        <a href="#contact">{{ t('nav.contact') }}</a>
      </div>
      <div class="nav-right">
        <div class="lang-toggle" role="tablist" aria-label="Language">
          <button :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
          <button :class="{ active: locale === 'es' }" @click="setLocale('es')">ES</button>
        </div>
        <a class="icon-btn hide-mobile" href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
        </a>
        <a class="icon-btn hide-mobile" href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.65H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>
        </a>
        <button class="icon-btn" id="themeToggle" aria-label="Theme" title="Theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.top {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  background: linear-gradient(to bottom, rgba(9,9,11,0.72), rgba(9,9,11,0.45));
  border-bottom: 1px solid transparent;
  transition: border-color .2s ease, background .2s ease;
}
nav.top.scrolled { border-bottom-color: var(--border); }
nav.top .inner {
  display:flex; align-items:center; justify-content:space-between;
  height: 60px;
  max-width: var(--max); margin: 0 auto; padding: 0 var(--pad);
}
.brand {
  display:inline-flex; align-items:center; gap: 10px;
  font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.01em;
  color: var(--text-1);
  white-space: nowrap;
}
.brand > * { flex: 0 0 auto; }
.brand .glyph {
  width: 22px; height: 22px; border-radius: 6px;
  background: linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 60%, #000));
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 0 1px rgba(0,0,0,0.5);
  display:inline-flex; align-items:center; justify-content:center;
  color: #0b0b10; font-weight: 700; font-size: 11px;
  font-family: var(--font-mono);
}
.brand .name { color: var(--text-1); }
.brand .dot { color: var(--text-4); }
.brand .role { color: var(--text-3); }
.nav-links {
  display: flex; align-items: center; gap: 28px;
  font-size: 13px; color: var(--text-2);
}
.nav-links a { transition: color .15s; }
.nav-links a:hover { color: var(--text-1); }
.nav-right { display:flex; align-items:center; gap: 14px; }
.icon-btn {
  width:32px; height:32px; border-radius: 8px;
  display:inline-flex; align-items:center; justify-content:center;
  color: var(--text-2); border: 1px solid transparent;
  transition: background .15s, color .15s, border-color .15s;
  cursor: pointer; background: transparent;
}
.icon-btn:hover { color: var(--text-1); background: rgba(255,255,255,0.04); border-color: var(--border); }
.icon-btn svg { width: 16px; height:16px; }
.lang-toggle {
  display:inline-flex; align-items:center; gap:0; padding: 2px;
  border-radius: 999px; border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  font-family: var(--font-mono); font-size: 11px;
}
.lang-toggle button {
  appearance:none; background: transparent; border:0; color: var(--text-3);
  padding: 4px 9px; border-radius: 999px; cursor: pointer;
  font-family: inherit; font-size: inherit; letter-spacing: 0.04em;
  transition: color .15s, background .15s;
}
.lang-toggle button.active { color: var(--text-1); background: rgba(255,255,255,0.06); }

@media (max-width: 880px) {
  nav.top .inner { height: 52px; }
  .nav-links { display: none; }
  .brand .role { display: none; }
  .icon-btn.hide-mobile { display: none; }
}
</style>
