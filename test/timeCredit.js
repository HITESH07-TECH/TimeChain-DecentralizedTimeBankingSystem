const TimeCredit = artifacts.require("TimeCredit");

contract("TimeCredit", accounts => {
  it("should mint time credits", async () => {
    let instance = await TimeCredit.deployed();
    await instance.mint(accounts[0], 100);
    let balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.toNumber(), 100);
  });
});
