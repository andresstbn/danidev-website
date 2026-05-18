export function useScrollNavState() {
  const scrolled = ref(false)

  if (import.meta.client) {
    const update = () => {
      scrolled.value = window.scrollY > 8
    }

    onMounted(() => {
      window.addEventListener('scroll', update, { passive: true })
      update()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', update)
    })
  }

  return { scrolled }
}
