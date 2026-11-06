import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import ProductDetail from './components/ProductDetail'
import About from './components/About'
import WhatsAppFab from './components/WhatsAppFab'
import './store.css'

// Product pages live at #/product/:id; any other hash is a normal section anchor.
const parseRoute = () => {
  const m = window.location.hash.match(/^#\/product\/(\d+)$/)
  return m ? Number(m[1]) : null
}

const App = () => {
  const [productId, setProductId] = useState(parseRoute)

  useEffect(() => {
    const onHash = () => setProductId(parseRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (productId !== null) {
      window.scrollTo(0, 0)
      return
    }
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [productId])

  return (
    <>
      <Header />
      <main>
        {productId !== null ? (
          <ProductDetail id={productId} />
        ) : (
          <>
            <Hero />
            <Catalog />
          </>
        )}
        <About />
      </main>
      <footer>
        <div className="copyright">
          &copy; 2026 Miranti Collections. All rights reserved.
        </div>
      </footer>
      <WhatsAppFab />
    </>
  )
}

export default App
