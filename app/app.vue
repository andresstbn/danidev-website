<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const head = useLocaleHead()

const title = 'Daniel A. Esteban | Tech Lead & Software Engineer'
const description = computed(() => t('hero.headline'))

useSeoMeta({
  title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://danidev.co',
  twitterCard: 'summary_large_image'
})

function toggleLocale() {
  setLocale(locale.value === 'es' ? 'en' : 'es')
}
</script>

<template>
  <UApp>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body class="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
        <UHeader>
          <template #left>
            <NuxtLink to="/" class="font-bold text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
              Daniel<span class="text-primary-500">.</span>
            </NuxtLink>
          </template>

          <template #right>
            <UButton
              color="neutral"
              variant="ghost"
              @click="toggleLocale"
            >
              {{ locale === 'es' ? 'EN' : 'ES' }}
            </UButton>
            <UColorModeButton />
            <UButton
              to="https://github.com/andresstbn"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
              color="neutral"
              variant="ghost"
            />
            <UButton
              to="https://www.linkedin.com/in/andresstbn/"
              target="_blank"
              icon="i-simple-icons-linkedin"
              aria-label="LinkedIn"
              color="neutral"
              variant="ghost"
            />
          </template>
        </UHeader>

        <UMain>
          <NuxtPage />
        </UMain>

        <UFooter>
          <template #left>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">
              © {{ new Date().getFullYear() }} Daniel A. Esteban. All rights reserved.
            </p>
          </template>
        </UFooter>
      </Body>
    </Html>
  </UApp>
</template>
