const UserManagement = artifacts.require("UserManagement");
const TimeCredit = artifacts.require("TimeCredit");
const ServiceManagement = artifacts.require("ServiceManagement");

module.exports = function (deployer) {
  deployer.deploy(UserManagement)
    .then(() => deployer.deploy(TimeCredit))
    .then(() => deployer.deploy(ServiceManagement));
};
