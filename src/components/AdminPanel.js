import React, { useState } from 'react';
import { Container, Card, Table, Button, Form } from 'react-bootstrap';
import '../App.css';
import Header from './Header';
const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 10 },
  { id: 2, name: 'Product 2', price: 200, stock: 5 },
  { id: 3, name: 'Product 3', price: 500, stock: 15 },
  { id: 4, name: 'Product 4', price: 500, stock: 20 },
];

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', stock: '' }); // Reset form after adding
    }
  };

  return (
    
    <Container className="mt-4">
        <Header />
      <Card className="shadow-sm"> 
        <Card.Body>
          <h2 className="text-center">Admin Panel</h2>
          <h4 className="text-center">Manage Products</h4>
          <Form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              />
            </Form.Group>

            <Button style={{backgroundColor:"green", width:'15%', marginTop:'10px', marginLeft:'500px'}} type="submit" className="w-20">
              Add Product
            </Button>
          </Form>

          <h4 className="mt-4">Product List</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminPanel;
