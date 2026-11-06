import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { products } from "../data/products";
import { formatPrice } from "../utils/format";
import { openWhatsApp } from "../utils/whatsapp";

const ProductDetail = ({ id }) => {
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Container className="detail">
        <h1>Product not found</h1>
        <p>This product may have been removed.</p>
        <a className="btn btn-store" href="#catalog">Back to catalog</a>
      </Container>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Container className="detail">
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="#catalog">Catalog</a> / {product.category} / {product.name}
      </nav>

      <Row className="g-4 g-lg-5">
        <Col xs={12} md={6}>
          <Image src={product.image} alt={product.name} className="detail-img" />
        </Col>
        <Col xs={12} md={6}>
          <span className="category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price detail-price">{formatPrice(product.price)}</p>
          <p>{product.description}</p>

          <dl className="specs">
            {product.specs.map(([label, value]) => (
              <div className="spec-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="detail-actions">
            <button
              type="button"
              className="btn btn-wa"
              onClick={() =>
                openWhatsApp(`Hi, I'd like to order ${product.name} (${formatPrice(product.price)}).`)
              }
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Order on WhatsApp
            </button>
            <a className="btn btn-outline-store" href="#catalog">Back to catalog</a>
          </div>
        </Col>
      </Row>

      {related.length > 0 && (
        <section className="related">
          <h2>More {product.category.toLowerCase()}</h2>
          <Row className="g-3">
            {related.map((r) => (
              <Col xs={6} md={4} key={r.id}>
                <a className="related-card" href={`#/product/${r.id}`}>
                  <Image src={r.image} alt="" fluid />
                  <span>{r.name}</span>
                  <span className="price">{formatPrice(r.price)}</span>
                </a>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
};

export default ProductDetail;
