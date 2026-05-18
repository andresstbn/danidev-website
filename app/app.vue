<script setup lang="ts">
const { t, locale } = useI18n()
const head = useLocaleHead({ addSeoAttributes: true })
const { accent } = useAccent()

const title = computed(() => 'Daniel A. Esteban — Tech Lead, Payment Infrastructure')
const description = computed(() => t('hero.lede'))

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://danidev.co',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <Html :lang="locale" :data-accent="accent">
    <Head>
      <template v-for="link in (head.link || [])" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in (head.meta || [])" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <LayoutTheNav />
      <main>
        <NuxtPage />
      </main>
      <LayoutTheFooter />
    </Body>
  </Html>
</template>
