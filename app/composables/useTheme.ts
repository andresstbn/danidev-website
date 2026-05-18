import { useState } from '#app'

type Theme = 'dark' | 'light'

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'dark')

  const apply = (t: Theme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = t
      try { localStorage.setItem('site.theme', t) } catch {}
    }
    theme.value = t
  }

  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark')

  // Sync reactive state from what the pre-paint script already set on the DOM.
  // Must run in onMounted so it happens after Vue hydration, not during it.
  if (import.meta.client) {
    onMounted(() => {
      const cur = document.documentElement.dataset.theme as Theme | undefined
      if (cur && cur !== theme.value) theme.value = cur
    })
  }

  return { theme, setTheme: apply, toggle }
}
