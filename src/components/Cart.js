import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import '../App.css'
function Cart({ cart }) {
  const handleCheckout = () => {
   
  };

  return (
    <Container>
      <h2> Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={handleCheckout}>Checkout</Button>
    </Container>
  );
}

export default Cart;
