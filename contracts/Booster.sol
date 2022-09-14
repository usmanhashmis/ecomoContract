// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Booster {
  address owner;
  mapping(address => uint256) public accountBalances;

modifier onlyOwner(){
    require(msg.sender!=owner,"only owner can call this");
    _;
}
  constructor() {
    owner = msg.sender;
  }


  receive() external payable{
    require (msg.value > 0, "Empty transact");
    accountBalances[msg.sender]=msg.value;
  }

  function fund() public payable{
    require (msg.value > 0, "Empty transact");
    payable(address(this)).transfer(msg.value);
    accountBalances[msg.sender]=msg.value;

  }
  function withdraw() public payable  {
    payable(owner).transfer(address(this).balance);
  }

  function checkBalance() public view returns(uint){
    return address(this).balance;
  }
}