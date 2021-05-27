import { AddressDataProvider } from "@lib/addressDataProvider"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AddressDataProvider>
      <Component {...pageProps} />
    </AddressDataProvider>
  )
}

export default MyApp
