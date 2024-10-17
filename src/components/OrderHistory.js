import React from 'react';
import { Container, Table } from 'react-bootstrap';
import '../App.css'
import Header from './Header';
const orderHistoryData = [
  { id: 1, date: '2024-09-12', status: 'Completed', total: 3000 },
  { id: 2, date: '2024-10-16', status: 'Pending', total: 5000 },
  { id: 3, date: '2024-07-04', status: 'Completed', total: 2500 },
  { id: 4, date: '2024-08-18', status: 'Completed', total: 2700 },
];

function OrderHistory() {
  return (
    <Container>
        <Header /> 
      <h2>Order History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistoryData.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default OrderHistory;
