import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FooterEN from '../components/footerEN'
// import FooterEN from 'https://github.com/GDSimpson3/Git-global-components/blob/main/footer.jsx'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <br /><br />
   <Component {...pageProps} />
   {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}

   <FooterEN/>
   </>
  )
}
