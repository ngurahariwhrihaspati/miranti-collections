import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { products, categories } from "../data/products";
import { formatPrice } from "../utils/format";

const Catalog = () => {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (!q || `${p.name} ${p.category} ${p.overview}`.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const reset = () => {
    setCategory("All");
    setQuery("");
  };

  return (
    <section id="catalog" className="block">
      <Container>
        <div className="block-head">
          <h2>Catalog</h2>
          <p>Beans roasted this week and the gear we brew with every day.</p>
        </div>

        <div className="toolbar">
          <input
            type="search"
            className="search"
            placeholder="Search products"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="pill-row" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`pill ${category === c ? "active" : ""}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="visually-hidden" aria-live="polite">
          {visible.length} products shown
        </p>

        <Row className="g-4">
          {visible.map((p) => (
            <Col xs={12} sm={6} lg={4} key={p.id}>
              <Card className="product-card">
                <Card.Img variant="top" src={p.image} alt={p.name} loading="lazy" />
                <Card.Body>
                  <span className="category">{p.category}</span>
                  <Card.Title as="h3">{p.name}</Card.Title>
                  <span className="price">{formatPrice(p.price)}</span>
                  <Card.Text className="overview">{p.overview}</Card.Text>
                  <a className="btn btn-store" href={`#/product/${p.id}`}>Read more</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {visible.length === 0 && (
          <div className="empty">
            <p>No products match your search.</p>
            <button type="button" className="btn btn-store" onClick={reset}>
              Clear search and filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Catalog;
