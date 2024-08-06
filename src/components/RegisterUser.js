import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import web3 from '../utils/web3';
import { UserManagementContract } from '../utils/contracts';

const RegisterUser = () => {
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      await UserManagementContract.methods.registerUser(email).send({ from: accounts[0] });

      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Register User</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">Register</Button>
          </Form>
          {account && <p>Registered with account: {account}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterUser;
