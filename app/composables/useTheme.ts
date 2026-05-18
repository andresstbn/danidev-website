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

  if (import.meta.client) {
    const cur = document.documentElement.dataset.theme as Theme | undefined
    if (cur === 'dark' || cur === 'light') theme.value = cur
  }

  return { theme, setTheme: apply, toggle }
}
