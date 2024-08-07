import React, { useState } from 'react';
import web3 from '../utils/web3';
import { ServiceManagementContract, TimeCreditContract } from '../utils/contracts';

function RequestService() {
  const [serviceId, setServiceId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      console.log(`Account: ${account}`);
      console.log(`Service ID: ${serviceId}`);
      console.log(`Amount: ${amount}`);

      // Get service details
      const service = await ServiceManagementContract.methods.getService(serviceId).call();
      console.log('Service details:', service);

      // Ensure service is verified before proceeding
      if (!service.verified) {
        alert('Service request sent to the provider.');
        return;
      }

      // Transfer time credits to the service provider
      const amountInWei = web3.utils.toWei(amount, 'ether');
      console.log(`Amount in Wei: ${amountInWei}`);

      const receipt = await TimeCreditContract.methods.transfer(service.provider, amountInWei).send({ from: account });
      console.log('Transaction receipt:', receipt);

      alert('Service requested successfully!');
    } catch (error) {
      console.error('Error requesting service:', error);
      alert('Error requesting service. Check console for details.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Service ID"
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (in TCREDIT)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Request Service</button>
    </form>
  );
}

export default RequestService;
