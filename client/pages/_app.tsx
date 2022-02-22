import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import { UserProvider } from '../components/contexts/UserContext'

function MyApp({ Component, pageProps, router }: AppProps) {

  if (router.pathname === "/") {
    return <Component {...pageProps} />
  }

  return (
    <UserProvider>
      <Nav {...pageProps} />
      <Component {...pageProps} />
    </UserProvider>
  )

}

export default MyApp
