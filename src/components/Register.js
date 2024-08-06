import React, { useState } from 'react';
import web3 from '../utils/web3';
import UserManagement from '../contracts/UserManagement.json';

function Register() {
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = UserManagement.networks[networkId];
    const contract = new web3.eth.Contract(UserManagement.abi, deployedNetwork && deployedNetwork.address);

    await contract.methods.registerUser(email).send({ from: accounts[0] });
    alert('Registration successful');
  };

  return (
    <div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
