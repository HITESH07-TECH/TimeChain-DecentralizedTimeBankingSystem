import React, { useState } from 'react';
import web3 from '../utils/web3';
import TimeCredit from '../contracts/TimeCredit.json';

function TransferCredits() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = TimeCredit.networks[networkId];
    const contract = new web3.eth.Contract(TimeCredit.abi, deployedNetwork && deployedNetwork.address);

    await contract.methods.transfer(recipient, web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    alert('Transfer successful');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Transfer</button>
    </form>
  );
}

export default TransferCredits;
