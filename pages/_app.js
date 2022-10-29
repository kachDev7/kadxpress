import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  })
  return(
    <div>
          <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> 
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+SC&family=Montserrat:wght@500&family=Nunito+Sans:wght@300&family=Trispace&family=Ubuntu:wght@500&display=swap" rel="stylesheet" />

    </Head>
    <Component {...pageProps} />
    </div>
  )
   
}

export default MyApp
