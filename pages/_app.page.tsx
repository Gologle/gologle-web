import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
