type AccentColor = 'indigo' | 'emerald' | 'cyan' | 'teal'

const VALID_ACCENTS: AccentColor[] = ['indigo', 'emerald', 'cyan', 'teal']

export function useAccent() {
  const accent = useState<AccentColor>('accent', () => 'indigo')

  function setAccent(value: AccentColor) {
    if (!VALID_ACCENTS.includes(value)) return
    accent.value = value
    if (import.meta.client) {
      document.documentElement.dataset.accent = value
      localStorage.setItem('accent', value)
    }
  }

  function cycleAccent() {
    const idx = VALID_ACCENTS.indexOf(accent.value)
    setAccent(VALID_ACCENTS[(idx + 1) % VALID_ACCENTS.length])
  }

  // Initialize from localStorage or URL on client
  if (import.meta.client) {
    const route = useRoute()
    const urlAccent = (route.query.accent as string)?.toLowerCase() as AccentColor
    const stored = localStorage.getItem('accent') as AccentColor | null

    if (urlAccent && VALID_ACCENTS.includes(urlAccent)) {
      setAccent(urlAccent)
    } else if (stored && VALID_ACCENTS.includes(stored)) {
      setAccent(stored)
    } else {
      setAccent('indigo')
    }
  }

  return {
    accent: readonly(accent),
    setAccent,
    cycleAccent,
    accents: VALID_ACCENTS
  }
}
