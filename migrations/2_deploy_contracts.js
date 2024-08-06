const UserManagement = artifacts.require("UserManagement");
const TimeCredit = artifacts.require("TimeCredit");
const ServiceManagement = artifacts.require("ServiceManagement");

module.exports = function (deployer) {
  deployer.deploy(UserManagement);
  deployer.deploy(TimeCredit, "TimeCredit", "TC").then(function() {
    return deployer.deploy(ServiceManagement, TimeCredit.address);
  });
};
