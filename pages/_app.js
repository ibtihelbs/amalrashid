import '../styles/globals.css'
import { BlogContext, BlogProvider} from '../Context/BlogContext'
function MyApp({ Component, pageProps }) {
  return( 
  <BlogProvider>
    <Component {...pageProps} />
  </BlogProvider>
  )
}

export default MyApp
