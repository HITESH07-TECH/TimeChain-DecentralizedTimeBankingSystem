// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserManagement {
    struct User {
        string email;
        address userAddress;
    }

    mapping(address => User) public users;
    address[] public userAddresses;

    function registerUser(string memory email) public {
        require(bytes(users[msg.sender].email).length == 0, "User already registered");
        users[msg.sender] = User(email, msg.sender);
        userAddresses.push(msg.sender);
    }

    function getUser(address userAddress) public view returns (string memory email) {
        require(bytes(users[userAddress].email).length != 0, "User not registered");
        return users[userAddress].email;
    }

    function getAllUsers() public view returns (address[] memory) {
        return userAddresses;
    }
}
