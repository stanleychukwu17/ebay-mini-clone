import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComp from '../components/partials/HeaderComp'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <HeaderComp />
        <Component {...pageProps} />
      </>
    )
}
export default MyApp
