// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract MyContract {
    uint256 private money;
    mapping(address => uint256) public balance;

    constructor(uint256 _money) {
        money = _money;
        balance[msg.sender] = money;
    }

    function changeMoney(uint256 _money) public {
        money = _money;
    }

    function allOfMoney() public view returns (uint256) {
        return money;
    }

    function transferMoney(address to, uint256 _value) public returns (bool) {
        require(balance[msg.sender] >= _value);
        balance[to] += _value;
        balance[msg.sender] -= _value;
        return true;
    }
}
