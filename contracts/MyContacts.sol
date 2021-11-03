// SPDX-License-Identifier: MIT

pragma solidity >= 0.7.0 < 0.9.0;

contract MyContract {
    uint private money;
    mapping(address => uint) public balance;

    constructor(uint _money) {
        money = _money;
        balance[msg.sender] = money;
    }

    function changeMoney(uint _money) public {
        money = _money;
    }

    function allOfMoney() public view returns (uint){
        return money;
    }

    function transferMoney(uint _money) public {

    }
}