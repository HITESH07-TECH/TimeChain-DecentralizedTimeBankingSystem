import React, { useState } from 'react';
import web3 from '../utils/web3';
import ServiceManagement from '../contracts/ServiceManagement.json';
import TimeCredit from '../contracts/TimeCredit.json';

function RequestService() {
  const [serviceId, setServiceId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const serviceContract = new web3.eth.Contract(ServiceManagement.abi, ServiceManagement.networks[networkId].address);
    const timeCreditContract = new web3.eth.Contract(TimeCredit.abi, TimeCredit.networks[networkId].address);

    // Transfer time credits to the service provider
    const service = await serviceContract.methods.getService(serviceId).call();
    await timeCreditContract.methods.transfer(service.provider, web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });

    alert('Service requested');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Service ID" value={serviceId} onChange={(e) => setServiceId(e.target.value)} />
      <input type="number" placeholder="Amount (in TCREDIT)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Request Service</button>
    </form>
  );
}

export default RequestService;
