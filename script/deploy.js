async function main() {
  const MyContact = await ethers.getContractFactory("MyContract");
  const myContact = await MyContact.deploy("My Contract");

  console.log("My Contract deployed to : ", myContact.address);
  
}

main().then(()=>process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
