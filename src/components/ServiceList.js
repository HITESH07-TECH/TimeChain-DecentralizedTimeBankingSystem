import React, { useEffect, useState } from 'react';
import web3 from '../utils/web3';
import ServiceManagement from '../contracts/ServiceManagement.json';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ServiceManagement.networks[networkId];
      const contract = new web3.eth.Contract(ServiceManagement.abi, deployedNetwork && deployedNetwork.address);
      const serviceCount = await contract.methods.serviceCount().call();
      const servicesList = [];
      for (let i = 0; i < serviceCount; i++) {
        const service = await contract.methods.getService(i).call();
        servicesList.push({
          id: i,
          name: service[0],
          provider: service[1],
          verified: service[2],
          rating: service[3],
        });
      }
      setServices(servicesList);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Available Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>Provider: {service.provider}</p>
            <p>Verified: {service.verified ? 'Yes' : 'No'}</p>
            <p>Rating: {service.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
