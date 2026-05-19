type Theme = 'dark' | 'light'

export const useTheme = () => {
  const cookie = useCookie<Theme>('site.theme', {
    default: () => 'dark',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  // State initialises from cookie — consistent between SSR and client.
  const theme = useState<Theme>('theme', () => cookie.value)

  const apply = (t: Theme) => {
    cookie.value = t
    theme.value = t
    if (import.meta.client) {
      document.documentElement.dataset.theme = t
    }
  }

  const toggle = () => apply(theme.value === 'dark' ? 'light' : 'dark')

  if (import.meta.client) {
    onMounted(() => {
      // One-time migration: if the user had a localStorage preference from
      // the previous build, move it into the cookie and remove the key.
      try {
        const stored = localStorage.getItem('site.theme') as Theme | null
        if (stored === 'light' || stored === 'dark') {
          localStorage.removeItem('site.theme')
          if (stored !== cookie.value) {
            apply(stored)
            return
          }
        }
      } catch {}

      // Sync state with whatever the pre-paint script already set on the DOM
      // (handles ?theme= URL param overriding the cookie).
      const domTheme = document.documentElement.dataset.theme as Theme | undefined
      if ((domTheme === 'light' || domTheme === 'dark') && domTheme !== theme.value) {
        apply(domTheme)
      }
    })
  }

  return { theme, setTheme: apply, toggle }
}
