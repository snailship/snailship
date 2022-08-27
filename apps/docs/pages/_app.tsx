import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </GeistProvider>
  )
}

export default MyApp
