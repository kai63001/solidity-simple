const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContact", () => {
  it("should return its name", async () => {
    const MyContact = await ethers.getContractFactory("MyContract");
    const myContact = await MyContact.deploy("My Contract");

    await myContact.deployed();
    expect(await myContact.getName()).to.equal("My Contract");
  });
  it("should return its name", async () => {
    const MyContact = await ethers.getContractFactory("MyContract");
    const myContact = await MyContact.deploy("My Contract");

    await myContact.changeName("Romeo");
    expect(await myContact.getName()).to.equal("Romeo");
  });
});
