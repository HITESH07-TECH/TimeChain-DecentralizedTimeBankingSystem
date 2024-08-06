import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import web3 from '../utils/web3';
import { UserManagementContract, TimeCreditContract } from '../utils/contracts';

const UserDashboard = () => {
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const loadUserData = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const userEmail = await UserManagementContract.methods.getUser(accounts[0]).call();
      setEmail(userEmail);

      const userBalance = await TimeCreditContract.methods.balanceOf(accounts[0]).call();
      setBalance(userBalance);
    };

    loadUserData();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>User Dashboard</Card.Title>
              <Card.Text>
                <strong>Account:</strong> {account}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {email}
              </Card.Text>
              <Card.Text>
                <strong>Time Credits:</strong> {balance}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
