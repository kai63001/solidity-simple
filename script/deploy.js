async function main() {
  const MyContact = await ethers.getContractFactory("TestNft");
  const myContact = await MyContact.deploy();

  console.log("My Contract deployed to : ", myContact.address);
  
}

main().then(()=>process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
