import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import web3 from '../utils/web3';
import { ServiceManagementContract } from '../utils/contracts';

const ListService = () => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');

  const handleListService = async (e) => {
    e.preventDefault();
  
    try {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
  
      console.log(`Account: ${accounts[0]}`);
      console.log(`Listing service: ${name}`);
  
      const receipt = await ServiceManagementContract.methods.listService(name)
        .send({ from: accounts[0], gas: 3000000 });
  
      console.log('Transaction receipt:', receipt);
      alert('Service listed successfully!');
    } catch (error) {
      console.error('Error listing service:', error);
      alert('Error listing service. Check console for details.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>List Service</h2>
          <Form onSubmit={handleListService}>
            <Form.Group controlId="formName">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">List Service</Button>
          </Form>
          {account && <p>Using account: {account}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default ListService;
