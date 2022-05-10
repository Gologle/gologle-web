import { useTheme } from 'next-themes'
import * as React from 'react'

const useDarkMode = () => {
  const { theme, setTheme } = useTheme()
  const darkMode = theme === 'dark'

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggle = () => setTheme(darkMode ? 'light' : 'dark')

  return {
    darkMode,
    toggle,
  }
}

export default useDarkMode
