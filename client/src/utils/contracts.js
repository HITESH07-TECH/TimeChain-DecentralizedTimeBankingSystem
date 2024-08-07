import web3 from './web3';
import UserManagementABI from './abi/UserManagement.json';
import TimeCreditABI from './abi/TimeCredit.json';
import ServiceManagementABI from './abi/ServiceManagement.json';
import contractAddresses from './contractAddresses';

const UserManagementContract = new web3.eth.Contract(UserManagementABI.abi, contractAddresses.UserManagement);
const TimeCreditContract = new web3.eth.Contract(TimeCreditABI.abi, contractAddresses.TimeCredit);
const ServiceManagementContract = new web3.eth.Contract(ServiceManagementABI.abi, contractAddresses.ServiceManagement);

export { UserManagementContract, TimeCreditContract, ServiceManagementContract };
