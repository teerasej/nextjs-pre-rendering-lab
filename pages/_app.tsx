import '../styles/globals.css'
import type { AppProps } from 'next/app'


// export function reportWebVitals(metric:any) {
//   if (metric.label === 'web-vital') {
//     console.log(metric) // The metric object ({ id, name, startTime, value, label }) is logged to the console
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
