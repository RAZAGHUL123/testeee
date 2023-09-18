import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Image, Button } from 'react-bootstrap'; // Import Bootstrap components

// Welcome to the Enhanced Multiverse Home Page!
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product data from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="home-container">
      <Row>
        <Col>
          <h1 className="display-3">Welcome to the Multiverse!</h1>
          <p className="lead">Where Infinite Possibilities Await...</p>
          <Button variant="danger" href="https://rickandmortyapi.com/" target="_blank">
            Explore the Multiverse
          </Button>
        </Col>
        <Col>
          <Image
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Portal to the Multiverse"
            fluid
          />
        </Col>
      </Row>
      
      <Row>
        <Col>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2>Featured Products</h2>
              <ul>
                {products.slice(0, 5).map((product) => (
                  <li key={product.id}>{product.title}</li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
