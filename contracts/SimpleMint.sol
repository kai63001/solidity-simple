// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TestNft is ERC721URIStorage {
    using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
   uint public deposits = 0;
   uint amount = 0;
    address payable public Owner;

    constructor () ERC721 ("Romeo","RO") {
        Owner = payable(msg.sender); 
    }
    
   function mintNFT(string memory tokenURI) public returns (uint256) {
       _tokenIds.increment();
       uint256 newItemId = _tokenIds.current();
       _safeMint(msg.sender, newItemId);
       _setTokenURI(newItemId, tokenURI);
       return newItemId;
   }
   
   function totalSupply() public view returns (Counters.Counter memory) {
       return _tokenIds;
   }
   
   modifier onlyOwner() {
        require(msg.sender == Owner, 'Not owner');
        _;
    }
   
   function deposit() public payable returns (uint256) {
      deposits= 1;
      amount += msg.value;
      return msg.value;
    }
    
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    } 
    
    function withdraw (uint _amount) public onlyOwner {
        Owner.transfer(_amount); 
    }
}