<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="block" id="work">
    <div class="container">
      <div class="section-head">
        <div class="label">
          <span class="num">01</span>
          <span>{{ t('sec.work') }}</span>
        </div>
        <h2>
          <span>{{ t('work.head') }}</span>
          <span class="muted">{{ t('work.headMuted') }}</span>
        </h2>
      </div>

      <div class="timeline">
        <!-- Wompi -->
        <ExperienceRole>
          <template #now>{{ t('time.now') }}</template>
          <template #period>2024 — {{ t('time.present') }}</template>
          <template #org>Wompi · Bancolombia</template>
          <template #loc>{{ t('loc.remote') }}</template>
          <template #title>{{ t('role.wompi.title') }}</template>
          <template #sub>TypeScript · NestJS · AWS · POS · EMV · PCI DSS</template>
          <template #lede>{{ t('role.wompi.lede') }}</template>
          <template #bullets>
            <ul>
              <li>{{ t('role.wompi.b1') }}</li>
              <li>{{ t('role.wompi.b2') }}</li>
              <li>{{ t('role.wompi.b3') }}</li>
              <li>{{ t('role.wompi.b4') }}</li>
              <li>{{ t('role.wompi.b5') }}</li>
            </ul>
          </template>
          <template #tags>
            <span class="tag hot">EMV L3</span>
            <span class="tag hot">PCI DSS</span>
            <span class="tag">AWS · SQS · KMS</span>
            <span class="tag">NestJS</span>
            <span class="tag">Event-driven</span>
            <span class="tag">Idempotency</span>
          </template>
        </ExperienceRole>

        <!-- Datak -->
        <ExperienceRole>
          <template #period>2023 — 2025</template>
          <template #org>Datak SAS</template>
          <template #loc>{{ t('loc.consult') }}</template>
          <template #title>{{ t('role.datak.title') }}</template>
          <template #sub>Python · Django · FastAPI · Nuxt 3 · GCP</template>
          <template #lede>{{ t('role.datak.lede') }}</template>
          <template #bullets>
            <ul>
              <li>{{ t('role.datak.b1') }}</li>
              <li>{{ t('role.datak.b2') }}</li>
              <li>{{ t('role.datak.b3') }}</li>
            </ul>
          </template>
          <template #tags>
            <span class="tag">GCP</span>
            <span class="tag">Django / DRF</span>
            <span class="tag">FastAPI</span>
            <span class="tag">Nuxt 3</span>
            <span class="tag">PostgreSQL</span>
          </template>
        </ExperienceRole>

        <!-- Erictel arch -->
        <ExperienceRole>
          <template #period>2023 — 2024</template>
          <template #org>Iotel · Erictel</template>
          <template #loc>Bogotá, CO</template>
          <template #title>{{ t('role.erictel2.title') }}</template>
          <template #sub>VueJS · Symfony · Webpack · MongoDB</template>
          <template #lede>{{ t('role.erictel2.lede') }}</template>
          <template #bullets>
            <ul>
              <li>{{ t('role.erictel2.b1') }}</li>
              <li>{{ t('role.erictel2.b2') }}</li>
            </ul>
          </template>
          <template #tags>
            <span class="tag">Vue 3</span><span class="tag">Symfony</span><span class="tag">MongoDB</span><span class="tag">Webpack</span>
          </template>
        </ExperienceRole>

        <!-- Davivienda -->
        <ExperienceRole>
          <template #period>2022 — 2023</template>
          <template #org>Banco Davivienda</template>
          <template #loc>{{ t('loc.bog') }}</template>
          <template #title>{{ t('role.daviv.title') }}</template>
          <template #sub>GCP · Kubernetes · FastAPI · Django · SOAP · AngularJS</template>
          <template #lede>{{ t('role.daviv.lede') }}</template>
          <template #bullets>
            <ul>
              <li>{{ t('role.daviv.b1') }}</li>
              <li>{{ t('role.daviv.b2') }}</li>
              <li>{{ t('role.daviv.b3') }}</li>
            </ul>
          </template>
          <template #tags>
            <span class="tag">GCP · GKE</span><span class="tag">SOAP</span><span class="tag">Spanner</span><span class="tag">FastAPI</span>
          </template>
        </ExperienceRole>

        <!-- Erictel IoT -->
        <ExperienceRole>
          <template #period>2021 — 2022</template>
          <template #org>Iotel · Erictel</template>
          <template #loc>Bogotá, CO</template>
          <template #title>{{ t('role.erictel1.title') }}</template>
          <template #sub>Vue 3 · WebSockets · Web Workers · Leaflet · Google Maps</template>
          <template #lede>{{ t('role.erictel1.lede') }}</template>
          <template #tags>
            <span class="tag">Real-time</span><span class="tag">WebSockets</span><span class="tag">Geospatial</span>
          </template>
        </ExperienceRole>

        <!-- Inmetar -->
        <ExperienceRole>
          <template #period>2019 — 2021</template>
          <template #org>Inmetar SAS</template>
          <template #loc>Cúcuta, CO</template>
          <template #title>{{ t('role.inmetar.title') }}</template>
          <template #sub>FastAPI · Django · Svelte · Raspberry Pi · Modbus · PLC</template>
          <template #lede>{{ t('role.inmetar.lede') }}</template>
          <template #tags>
            <span class="tag">Edge</span><span class="tag">Modbus</span><span class="tag">PLC</span><span class="tag">ERP</span>
          </template>
        </ExperienceRole>

      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline { display:flex; flex-direction: column; }
</style>
