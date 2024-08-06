import React, { useState } from 'react';
import web3 from '../utils/web3';
import ServiceManagement from '../contracts/ServiceManagement.json';

function ListService() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ServiceManagement.networks[networkId];
    const contract = new web3.eth.Contract(ServiceManagement.abi, deployedNetwork && deployedNetwork.address);

    await contract.methods.listService(name).send({ from: accounts[0] });
    alert('Service listed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">List Service</button>
    </form>
  );
}

export default ListService;
