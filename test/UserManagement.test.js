const UserManagement = artifacts.require('UserManagement');

contract('UserManagement', (accounts) => {
  it('should register a user', async () => {
    const instance = await UserManagement.deployed();
    await instance.registerUser('test@example.com', { from: accounts[0] });
    const user = await instance.getUser(accounts[0]);
    assert.equal(user, 'test@example.com', 'User email does not match');
  });
});
