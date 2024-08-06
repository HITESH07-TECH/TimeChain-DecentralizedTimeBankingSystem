// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TimeCredit is ERC20 {
    constructor() ERC20("TimeCredit", "TCREDIT") {}

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        return super.transfer(recipient, amount);
    }
}
