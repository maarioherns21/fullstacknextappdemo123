import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//this allows to  data base to wrapt the app 
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <Component {...pageProps} />)
}
