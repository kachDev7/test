import '../styles/globals.css'
import '../styles/boot.css'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
