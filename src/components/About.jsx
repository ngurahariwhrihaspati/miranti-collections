import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { openWhatsApp } from '../utils/whatsapp'

// Placeholder coordinates: replace with the store's real location.
const STORE = { lat: -6.1754, lon: 106.8272 }
const d = 0.004
const bbox = [STORE.lon - d, STORE.lat - d, STORE.lon + d, STORE.lat + d].join(
  '%2C'
)
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${STORE.lat}%2C${STORE.lon}`

const hours = [
  { label: 'Monday to Friday', days: [1, 2, 3, 4, 5], time: '08:00 to 20:00' },
  { label: 'Saturday', days: [6], time: '09:00 to 21:00' },
  { label: 'Sunday', days: [0], time: '10:00 to 18:00' },
]

const socials = [
  ['Instagram', 'fa-instagram', 'https://www.instagram.com/'],
  ['Facebook', 'fa-facebook-f', 'https://www.facebook.com/'],
  ['TikTok', 'fa-tiktok', 'https://www.tiktok.com/'],
]

const About = () => {
  const today = new Date().getDay()
  return (
    <section id="about" className="block about">
      <Container>
        <div className="block-head">
          <h2>About and contact</h2>
        </div>
        <Row className="g-4 g-lg-5">
          <Col xs={12} md={6}>
            <p>
              Miranti Collections started as a roasting table in a garage and a
              promise to buy straight from the farms we name on every bag. We
              still roast in small batches, and we answer every message
              ourselves.
            </p>

            <h3 className="h5">Opening hours</h3>
            <table className="hours">
              <tbody>
                {hours.map((h) => (
                  <tr
                    key={h.label}
                    aria-current={h.days.includes(today) ? 'date' : undefined}
                  >
                    <th scope="row">{h.label}</th>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="address">Jl. Example No. 12, Your City</p>

            <button
              type="button"
              className="btn btn-wa"
              onClick={() => openWhatsApp()}
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Chat
              on WhatsApp
            </button>

            <ul className="socials-list" aria-label="Social media">
              {socials.map(([name, icon, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <i className={`fa-brands ${icon}`} aria-hidden="true"></i>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <iframe
              className="map-frame"
              title="Store location map"
              src={mapSrc}
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
