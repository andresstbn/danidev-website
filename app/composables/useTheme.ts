type Theme = 'dark' | 'light'

export const useTheme = () => {
  // Always initialise to 'dark' so the prerendered HTML and the client
  // both start from the same value — no hydration mismatch possible.
  // onMounted corrects the value from the DOM after hydration is done.
  const theme = useState<Theme>('theme', () => 'dark')

  const apply = (t: Theme) => {
    theme.value = t
    if (import.meta.client) {
      document.documentElement.dataset.theme = t
      try { localStorage.setItem('site.theme', t) } catch {}
    }
  }

  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark')

  if (import.meta.client) {
    // Read whatever the pre-paint script already wrote to the DOM
    // (from localStorage / ?theme= param). Runs after hydration → safe.
    onMounted(() => {
      const cur = document.documentElement.dataset.theme as Theme | undefined
      if ((cur === 'light' || cur === 'dark') && cur !== theme.value) {
        theme.value = cur
      }
    })
  }

  return { theme, setTheme: apply, toggle }
}
