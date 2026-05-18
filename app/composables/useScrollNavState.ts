import { useWindowScroll } from '@vueuse/core'

export const useScrollNavState = () => {
  const { y } = useWindowScroll()
  const isScrolled = computed(() => y.value > 8)

  return { isScrolled }
}
