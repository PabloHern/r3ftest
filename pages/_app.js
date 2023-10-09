import '@/styles/globals.css'
import '@/styles/app.css'
import CubeState from '@/context/CubeState'
export default function App({ Component, pageProps }) {
  return (
    <CubeState>
      <Component {...pageProps} />
    </CubeState>
  )
}
