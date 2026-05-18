<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UContainer class="py-24 sm:py-32 lg:py-40">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-sm font-semibold tracking-wide text-primary-500 uppercase mb-4">{{ t('hero.role') }}</h2>
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-neutral-900 dark:text-neutral-100 mb-6">
          {{ t('hero.headline') }}
        </h1>
        <p class="text-lg leading-8 text-neutral-600 dark:text-neutral-300 mb-10">
          {{ t('hero.description') }}
        </p>
        <div class="flex items-center justify-center gap-x-6">
          <UButton size="xl" color="primary" variant="solid" to="mailto:daniel@example.com">
            {{ t('hero.contact') }}
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Experience Section -->
    <UContainer class="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl mb-24">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-12 text-center">
          {{ t('experience.title') }}
        </h2>
        
        <div class="space-y-12">
          <!-- Wompi -->
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <div class="sm:w-1/4 shrink-0">
              <div class="font-medium text-neutral-900 dark:text-neutral-100">{{ t('experience.roles.wompi.title') }}</div>
              <div class="text-sm text-neutral-500">{{ t('experience.roles.wompi.company') }}</div>
            </div>
            <div class="sm:w-3/4">
              <p class="text-neutral-600 dark:text-neutral-300">
                {{ t('experience.roles.wompi.description') }}
              </p>
            </div>
          </div>
          
          <USeparator />

          <!-- Datak -->
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <div class="sm:w-1/4 shrink-0">
              <div class="font-medium text-neutral-900 dark:text-neutral-100">{{ t('experience.roles.datak.title') }}</div>
              <div class="text-sm text-neutral-500">{{ t('experience.roles.datak.company') }}</div>
            </div>
            <div class="sm:w-3/4">
              <p class="text-neutral-600 dark:text-neutral-300">
                {{ t('experience.roles.datak.description') }}
              </p>
            </div>
          </div>

          <USeparator />

          <!-- Davivienda -->
          <div class="flex flex-col sm:flex-row gap-6 items-start">
            <div class="sm:w-1/4 shrink-0">
              <div class="font-medium text-neutral-900 dark:text-neutral-100">{{ t('experience.roles.davivienda.title') }}</div>
              <div class="text-sm text-neutral-500">{{ t('experience.roles.davivienda.company') }}</div>
            </div>
            <div class="sm:w-3/4">
              <p class="text-neutral-600 dark:text-neutral-300">
                {{ t('experience.roles.davivienda.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
