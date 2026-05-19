type Theme = 'dark' | 'light'

export const useTheme = () => {
  const colorMode = useColorMode()

  const theme = computed(() => (colorMode.value || 'dark') as Theme)

  const setTheme = (t: Theme) => {
    colorMode.preference = t
  }

  const toggle = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, setTheme, toggle }
}
