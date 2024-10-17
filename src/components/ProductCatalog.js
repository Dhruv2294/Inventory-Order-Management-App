import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, ListGroup, Form } from 'react-bootstrap';
import Header from './Header';
import '../App.css';

const productsData = [
  {
    id: 1,
    name: 'Watches',
    price: 50,
    stock: 10,
    image: 'https://cdn.thewatchpages.com/app/uploads/2024/09/18100632/16_9-01_Arsenale_Main_Landing_Cut.jpg',
    category: 'Watches',
  },
  {
    id: 2,
    name: ' Mobiles',
    price: 200,
    stock: 5,
    image: 'https://images.cnbctv18.com/wp-content/uploads/2024/01/untitled-design-87-1019x573.jpg',
    category: 'Accessories', 
  },
  {
    id: 3,
    name: ' Guitar',
    price: 300,
    stock: 1,
    image: 'https://i.pinimg.com/originals/00/8c/75/008c75173308d7ae83aadb3d011303f1.jpg',
    category: 'Accessories', 
  },
  {
    id: 4,
    name: 'Watches',
    price: 1500,
    stock: 8,
    image: 'https://i.pinimg.com/736x/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg',
    category: 'Accessories', 
  },
  {
    id: 5,
    name: 'Ethnic Wear',
    price: 2500,
    stock: 2,
    image: 'https://critterkids.co.in/cdn/shop/files/DSC01305.webp?v=1722497896&width=1100',
    category: 'Fashion', 
  },
  {
    id: 6,
    name: 'Sneakers',
    price: 1000,
    stock: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKgqA49hZyeaHwEr_ZkD_OI5zel64TL1tNw&s',
    category: 'Fashion', 
  },
  {
    id: 7,
    name: ' Jhoomar',
    price: 3500,
    stock: 10,
    image: 'https://www.shopinroom.com/wp-content/uploads/2022/06/modern-jhumar-1024x768.jpg',
    category: 'Accessories', 
  },
  {
    id: 8,
    name: ' PS4',
    price: 120,
    stock: 100,
    image: 'https://one-quest.com/wp-content/uploads/2013/11/PS4-controller-HD-Wallpaper.jpg',
    category: 'Accessories', 
  },
  {
    id: 9,
    name: ' Watches',
    price: 999,
    stock: 5,
    image: 'https://images.unsplash.com/photo-1530049080396-450947c04fcd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGwlMjBjbG9ja3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'Watches', 
  },
];

const categories = [...new Set(productsData.map(product => product.category))]; 

function ProductCatalog() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesPriceFilter = () => {
      if (priceFilter === 'under100') return product.price < 100;
      if (priceFilter === 'under500') return product.price >= 101 && product.price < 500;
      if (priceFilter === 'under2500') return product.price >= 501 && product.price < 2500;
      if (priceFilter === 'under5000') return product.price >= 2501 && product.price < 5000;
      return true;
    };

    const matchesCategoryFilter = () => {
      return selectedCategory ? product.category === selectedCategory : true;
    };

    return matchesPriceFilter() && matchesCategoryFilter();
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Container>
      <Header /> 
      <h2>Product Cataloge</h2>

      <Form.Group controlId="filterPrice">
        <Form.Label>Filter by Price</Form.Label>
        <Form.Control
          as="select"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="under100">Under $100</option>
          <option value="under500">Under $500</option>
          <option value="under2500">Under $2500</option>
          <option value="under5000">Under $5000</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="filterCategory">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control
          as="select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="sortProducts">
        <Form.Label>Sort by Price</Form.Label>
        <Form.Control
          as="select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </Form.Control>
      </Form.Group>

      <Row>
        {sortedProducts.map((product) => (
          <Col key={product.id} md={4}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Button
                  style={{ backgroundColor: "green" }}
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <ListGroup>
              {cart.map((item, index) => (
                <ListGroup.Item key={index}>
                  <strong>{item.name}</strong> - ${item.price}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#020120" }} onClick={handleCloseCart}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#020120" }} onClick={() => alert('Checkout functionality here!')}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductCatalog;
