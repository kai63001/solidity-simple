const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContact", () => {
  it("should return its money", async () => {
    const MyContact = await ethers.getContractFactory("MyContract");
    const myContact = await MyContact.deploy(20000000);

    await myContact.deployed();
    expect(await myContact.allOfMoney()).to.equal(20000000);
  });

});
