import * as React from 'react'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import 'tailwindcss/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'

import '../styles/globals.css'

const client = new QueryClient()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <Toaster
          position='top-left'
          containerStyle={{
            top: 40,
            left: 40,
            bottom: 40,
            right: 40,
          }}
          toastOptions={{
            error: {
              className: '!bg-red-50',
            },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
