import { useStorage } from '@vueuse/core'

export type AccentColor = 'indigo' | 'emerald' | 'cyan' | 'teal'

export const useAccent = () => {
  const accent = useStorage<AccentColor>('personal_site_accent', 'indigo')

  const setAccent = (color: AccentColor) => {
    accent.value = color
  }

  // Effect to apply to documentElement
  if (import.meta.client) {
    watchEffect(() => {
      document.documentElement.dataset.accent = accent.value
    })
  }

  return { accent, setAccent }
}
