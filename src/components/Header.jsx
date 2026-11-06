import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const links = [
  ['Home', '#home'],
  ['Catalog', '#catalog'],
  ['About and contact', '#about'],
]

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <Navbar
      expand="md"
      sticky="top"
      expanded={open}
      onToggle={setOpen}
      className="store-nav"
    >
      <Container>
        <Navbar.Brand href="#home">Miranti Collections</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map(([label, href]) => (
              <Nav.Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
