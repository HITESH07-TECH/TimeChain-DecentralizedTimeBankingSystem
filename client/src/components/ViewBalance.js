import React, { useEffect, useState } from 'react';
import web3 from '../utils/web3';
import TimeCredit from '../contracts/TimeCredit.json';

function ViewBalance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TimeCredit.networks[networkId];
      const contract = new web3.eth.Contract(TimeCredit.abi, deployedNetwork && deployedNetwork.address);
      const response = await contract.methods.balanceOf(accounts[0]).call();
      setBalance(response);
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Your Balance: {balance}</h1>
    </div>
  );
}

export default ViewBalance;
