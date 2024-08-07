import React, { useState } from 'react';
import web3 from '../utils/web3';
import ServiceManagement from '../contracts/ServiceManagement.json';

function VerifyService() {
  const [serviceId, setServiceId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ServiceManagement.networks[networkId];
    const contract = new web3.eth.Contract(ServiceManagement.abi, deployedNetwork && deployedNetwork.address);

    await contract.methods.verifyService(serviceId).send({ from: accounts[0] });
    alert('Service verified');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Service ID" value={serviceId} onChange={(e) => setServiceId(e.target.value)} />
      <button type="submit">Verify Service</button>
    </form>
  );
}

export default VerifyService;
