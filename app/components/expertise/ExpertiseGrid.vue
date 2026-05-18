<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="block" id="expertise">
    <div class="container">
      <div class="section-head">
        <div class="label">
          <span class="num">02</span>
          <span>{{ t('sec.expertise') }}</span>
        </div>
        <h2>
          <span>{{ t('exp.head') }}</span>
        </h2>
      </div>

      <div class="skills-grid">
        <div class="skill-card">
          <div class="num">A · 01</div>
          <h4>{{ t('sk.eng.t') }}</h4>
          <ul>
            <li>TypeScript · Node.js <span class="mono">daily</span></li>
            <li>Python · FastAPI · Django <span class="mono">daily</span></li>
            <li>NestJS · Express</li>
            <li>Vue 3 · Nuxt 3 · React Native</li>
            <li>REST · OpenAPI · WebSockets</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="num">A · 02</div>
          <h4>{{ t('sk.arch.t') }}</h4>
          <ul>
            <li>{{ t('sk.arch.1') }}</li>
            <li>{{ t('sk.arch.2') }}</li>
            <li>{{ t('sk.arch.3') }}</li>
            <li>{{ t('sk.arch.4') }}</li>
            <li>{{ t('sk.arch.5') }}</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="num">A · 03</div>
          <h4>{{ t('sk.cloud.t') }}</h4>
          <ul>
            <li>AWS <span class="mono">EKS · Lambda · SQS · KMS</span></li>
            <li>GCP <span class="mono">Cloud Run · GKE · Cloud SQL</span></li>
            <li>Kubernetes · Docker</li>
            <li>Azure DevOps · CI/CD</li>
            <li>Linux · Git · observability</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="num">B · 01</div>
          <h4>{{ t('sk.fin.t') }}</h4>
          <ul>
            <li>POS device integrations</li>
            <li>EMV · L3 certification</li>
            <li>PCI DSS · scoped environments</li>
            <li>{{ t('sk.fin.4') }}</li>
            <li>{{ t('sk.fin.5') }}</li>
          </ul>
          <div class="hot">{{ t('sk.fin.hot') }}</div>
        </div>
        <div class="skill-card">
          <div class="num">B · 02</div>
          <h4>{{ t('sk.lead.t') }}</h4>
          <ul>
            <li>{{ t('sk.lead.1') }}</li>
            <li>{{ t('sk.lead.2') }}</li>
            <li>{{ t('sk.lead.3') }}</li>
            <li>{{ t('sk.lead.4') }}</li>
            <li>{{ t('sk.lead.5') }}</li>
          </ul>
        </div>
        <div class="skill-card">
          <div class="num">B · 03</div>
          <h4>{{ t('sk.now.t') }}</h4>
          <ul>
            <li>{{ t('sk.now.1') }}</li>
            <li>{{ t('sk.now.2') }}</li>
            <li>{{ t('sk.now.3') }}</li>
            <li>{{ t('sk.now.4') }}</li>
            <li>{{ t('sk.now.5') }}</li>
          </ul>
          <div class="hot">{{ t('sk.now.hot') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
  background: var(--border);
  border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
}
.skill-card {
  background: var(--bg);
  padding: 24px 24px 26px;
  min-height: 220px;
  display:flex; flex-direction: column; gap: 12px;
  position: relative;
  transition: background .2s;
}
.skill-card:hover { background: var(--bg-2); }
.skill-card .num {
  font-family: var(--font-mono); font-size: 11px; color: var(--text-4);
  letter-spacing: 0.08em;
}
.skill-card h4 {
  margin: 0; font-size: 15px; font-weight: 500;
  color: var(--text-1); letter-spacing: -0.005em;
}
.skill-card ul { list-style: none; margin: 0; padding: 0; }
.skill-card ul li {
  color: var(--text-2); font-size: 13px;
  padding: 4px 0; border-bottom: 1px dashed transparent;
}
.skill-card ul li .mono { font-family: var(--font-mono); color: var(--text-3); font-size: 11px; margin-left: 6px; }
.skill-card .hot {
  font-family: var(--font-mono); font-size: 10.5px;
  color: var(--accent); letter-spacing: 0.05em;
  text-transform: uppercase;
}

@media (max-width: 880px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>
