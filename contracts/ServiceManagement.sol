// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ServiceManagement {
    struct Service {
        string name;
        address provider;
        bool verified;
        uint256 rating;
        uint256 ratingsCount;
    }

    mapping(uint256 => Service) public services;
    uint256 public serviceCount;

    event ServiceListed(uint256 serviceId, string name, address provider);
    event ServiceVerified(uint256 serviceId);
    event ServiceRated(uint256 serviceId, uint256 rating);

    function listService(string memory name) public {
        services[serviceCount] = Service(name, msg.sender, false, 0, 0);
        emit ServiceListed(serviceCount, name, msg.sender);
        serviceCount++;
    }

    function verifyService(uint256 serviceId) public {
        Service storage service = services[serviceId];
        require(service.provider == msg.sender, "Only service provider can verify");
        service.verified = true;
        emit ServiceVerified(serviceId);
    }

    function rateService(uint256 serviceId, uint256 rating) public {
        Service storage service = services[serviceId];
        require(service.verified, "Service not verified");
        service.rating = (service.rating * service.ratingsCount + rating) / (service.ratingsCount + 1);
        service.ratingsCount++;
        emit ServiceRated(serviceId, rating);
    }

    function getService(uint256 serviceId) public view returns (string memory name, address provider, bool verified, uint256 rating) {
        Service storage service = services[serviceId];
        return (service.name, service.provider, service.verified, service.rating);
    }
}
