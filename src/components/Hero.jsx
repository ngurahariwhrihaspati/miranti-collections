import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { products } from '../data/products'
import { openWhatsApp } from '../utils/whatsapp'

const featured = products.find((p) => p.featured)
const adImage = featured.image // swap for a dedicated promo photo

const Hero = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true })
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!embla) return
    const onSelect = () => setIndex(embla.selectedScrollSnap())
    onSelect()
    embla.on('select', onSelect)
    return () => embla.off('select', onSelect)
  }, [embla])

  // Autoplay, paused on hover/focus and skipped for reduced-motion users.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!embla || paused || reduce) return
    const t = setInterval(() => embla.scrollNext(), 6000)
    return () => clearInterval(t)
  }, [embla, paused, index])

  return (
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-viewport" ref={emblaRef}>
        <div className="hero-track">
          {/* 1. Brand */}
          <div
            className="slide slide-brand"
            aria-roledescription="slide"
            aria-label="1 of 3"
          >
            <div className="slide-inner">
              <h1 className="brand-mark">Miranti Collections</h1>
              <p>
                Single-origin beans, roasted to order and shipped within 48
                hours.
              </p>
              <a className="btn btn-store" href="#catalog">
                Browse the catalog
              </a>
            </div>
          </div>

          {/* 2. Highlight product */}
          <div
            className="slide"
            style={{ backgroundImage: `url(${featured.image})` }}
            aria-roledescription="slide"
            aria-label="2 of 3"
          >
            <div className="slide-inner">
              <h2>{featured.name}</h2>
              <p>{featured.overview}</p>
              <a className="btn btn-store" href={`#/product/${featured.id}`}>
                See details
              </a>
            </div>
          </div>

          {/* 3. Ad with WhatsApp CTA */}
          <div
            className="slide"
            style={{ backgroundImage: `url(${adImage})` }}
            aria-roledescription="slide"
            aria-label="3 of 3"
          >
            <div className="slide-inner">
              <h2>Free shipping on orders over Rp 300.000</h2>
              <p>
                Message us your order and we will confirm stock and delivery the
                same day.
              </p>
              <button
                type="button"
                className="btn btn-wa"
                onClick={() =>
                  openWhatsApp(
                    'Hi, I saw the free shipping offer and would like to order.'
                  )
                }
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>{' '}
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={index === i}
            onClick={() => embla && embla.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
