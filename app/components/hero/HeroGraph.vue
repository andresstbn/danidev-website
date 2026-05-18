<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="hero-variant">
    <div class="hero-panel">
      <div class="panel-head">
        <div class="left"><span class="dot"></span><span>transaction · path · 03:24:17</span></div>
        <div class="right">us-east-1 / co-bog-1</div>
      </div>
      <div class="graph-wrap">
        <svg class="graph-svg" viewBox="0 0 520 380" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <linearGradient id="edge" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stop-color="currentColor" stop-opacity="0.0"/>
              <stop offset="0.3" stop-color="currentColor" stop-opacity="0.5"/>
              <stop offset="1" stop-color="currentColor" stop-opacity="0.0"/>
            </linearGradient>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" class="gr-dot"/>
            </pattern>
          </defs>
          <rect width="520" height="380" fill="url(#dots)"/>

          <!-- static edges -->
          <g class="gr-edge" stroke-width="1" fill="none">
            <!-- POS terminals to gateway -->
            <path d="M 70 70 C 160 70, 200 160, 250 190"/>
            <path d="M 70 160 C 160 160, 200 180, 250 190"/>
            <path d="M 70 250 C 160 250, 200 220, 250 190"/>
            <path d="M 70 340 C 160 340, 200 250, 250 190"/>
            <!-- gateway to processor cluster -->
            <path d="M 270 190 L 360 100"/>
            <path d="M 270 190 L 360 190"/>
            <path d="M 270 190 L 360 280"/>
            <!-- processor to issuer -->
            <path d="M 380 100 C 420 100, 440 130, 460 150"/>
            <path d="M 380 190 L 460 190"/>
            <path d="M 380 280 C 420 280, 440 230, 460 220"/>
          </g>

          <!-- accented flowing edges -->
          <g class="flow-paths" stroke="var(--accent)" stroke-width="1.4" fill="none" stroke-dasharray="2 6" stroke-linecap="round">
            <path d="M 70 70 C 160 70, 200 160, 250 190"/>
            <path d="M 270 190 L 360 190"/>
            <path d="M 380 190 L 460 190"/>
          </g>

          <!-- POS column -->
          <g class="gr-pos" font-family="var(--font-mono)" font-size="9" text-anchor="end">
            <g>
              <rect x="38" y="60" width="38" height="20" rx="4" class="gr-rect"/>
              <text x="76" y="74" class="gr-label" text-anchor="end">POS·01</text>
            </g>
            <g>
              <rect x="38" y="150" width="38" height="20" rx="4" class="gr-rect"/>
              <text x="76" y="164" class="gr-label" text-anchor="end">POS·02</text>
            </g>
            <g>
              <rect x="38" y="240" width="38" height="20" rx="4" class="gr-rect"/>
              <text x="76" y="254" class="gr-label" text-anchor="end">POS·03</text>
            </g>
            <g>
              <rect x="38" y="330" width="38" height="20" rx="4" class="gr-rect"/>
              <text x="76" y="344" class="gr-label" text-anchor="end">POS·n</text>
            </g>
            <text x="76" y="22" class="gr-meta" text-anchor="end">TERMINALS</text>
          </g>

          <!-- gateway node -->
          <g>
            <circle cx="260" cy="190" r="22" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.2"/>
            <circle cx="260" cy="190" r="6" fill="var(--accent)" class="node-pulse"/>
            <text x="260" y="234" font-family="var(--font-mono)" font-size="10" class="gr-label" text-anchor="middle">gateway</text>
            <text x="260" y="246" font-family="var(--font-mono)" font-size="8.5" class="gr-sub" text-anchor="middle">orchestrator</text>
            <text x="260" y="155" font-family="var(--font-mono)" font-size="9" class="gr-meta" text-anchor="middle">CORE</text>
          </g>

          <!-- processor cluster -->
          <g font-family="var(--font-mono)" font-size="9.5" text-anchor="middle">
            <g>
              <rect x="338" y="84" width="46" height="22" rx="5" class="gr-rect-strong"/>
              <text x="361" y="98" class="gr-label">PROC·A</text>
            </g>
            <g>
              <rect x="338" y="178" width="46" height="22" rx="5" class="gr-rect-strong"/>
              <text x="361" y="192" class="gr-label">PROC·B</text>
            </g>
            <g>
              <rect x="338" y="270" width="46" height="22" rx="5" class="gr-rect-strong"/>
              <text x="361" y="284" class="gr-label">PROC·C</text>
            </g>
            <text x="361" y="60" class="gr-meta" font-size="9">PROCESSORS</text>
          </g>

          <!-- issuer / network -->
          <g>
            <rect x="462" y="135" width="50" height="120" rx="6" class="gr-issuer"/>
            <text x="487" y="180" font-family="var(--font-mono)" font-size="9.5" class="gr-label" text-anchor="middle">ISSUER</text>
            <text x="487" y="196" font-family="var(--font-mono)" font-size="8.5" class="gr-sub" text-anchor="middle">network</text>
            <text x="487" y="216" font-family="var(--font-mono)" font-size="8.5" class="gr-sub" text-anchor="middle">bank</text>
            <text x="487" y="120" font-family="var(--font-mono)" font-size="9" class="gr-meta" text-anchor="middle">SETTLEMENT</text>
          </g>
        </svg>
        <div class="graph-legend">
          <span><span class="swatch" style="background:var(--accent)"></span> <span>{{ t('graph.live') }}</span></span>
          <span><span class="swatch swatch-idle"></span> <span>{{ t('graph.idle') }}</span></span>
          <span style="margin-left:auto;color:var(--text-4)">EVENT-DRIVEN · SQS · NEST</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-panel {
  position: relative;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(180deg, var(--card-hi), var(--card-lo));
  overflow: hidden;
  min-height: 460px;
}
.hero-panel::before {
  content:'';
  position:absolute; inset:0;
  background:
    linear-gradient(to bottom, var(--card-hi), transparent 40%),
    radial-gradient(800px 240px at 60% -10%, var(--accent-soft), transparent 60%);
  pointer-events:none;
}
.panel-head {
  display:flex; align-items:center; justify-content:space-between;
  padding: 12px 14px; border-bottom: 1px solid var(--border);
  font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.07em;
  color: var(--text-3); text-transform: uppercase;
  position: relative;
}
.panel-head .left { display:flex; align-items:center; gap: 8px; }
.panel-head .dot { width:6px; height:6px; border-radius:50%; background: var(--accent); box-shadow:0 0 0 3px var(--accent-soft); }
.panel-head .right { color: var(--text-4); }

.graph-wrap { padding: 24px 22px 22px; position: relative; }
.graph-svg { width:100%; height: 380px; display:block; }
.graph-legend {
  display:flex; gap: 24px; margin-top: 10px;
  font-family: var(--font-mono); font-size: 10px; color: var(--text-3);
  text-transform: uppercase; letter-spacing: 0.08em;
}
.graph-legend span { display:inline-flex; align-items:center; gap:6px; }
.graph-legend .swatch { width: 8px; height: 8px; border-radius: 2px; }
.graph-legend .swatch-idle { background: var(--gr-edge); }

/* svg class tokens */
.gr-dot         { fill: var(--gr-dot); }
.gr-edge        { stroke: var(--gr-edge); }
.gr-rect        { fill: var(--gr-rect-fill); stroke: var(--gr-pos-stroke); }
.gr-rect-strong { fill: var(--gr-rect-fill); stroke: var(--gr-rect-stroke); }
.gr-issuer      { fill: var(--gr-issuer-fill); stroke: var(--gr-pos-stroke); }
.gr-label       { fill: var(--text-1); }
.gr-pos         { fill: var(--text-2); }
.gr-sub         { fill: var(--text-3); }
.gr-meta        { fill: var(--text-4); }

@keyframes dash-flow { to { stroke-dashoffset: -24; } }
@keyframes node-pulse { 0%,100% { opacity:0.55; } 50% { opacity:1; } }

.flow-paths {
  animation: dash-flow 4.5s linear infinite;
}
.node-pulse {
  animation: node-pulse 2.6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .flow-paths, .node-pulse {
    animation: none;
  }
}

@media (max-width: 880px) {
  .hero-panel { min-height: auto; }
  .graph-svg { height: 280px; }
}
</style>
