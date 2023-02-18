/** @type import('hardhat/config').HardhatUserConfig */

const dotenv = require('dotenv');
dotenv.config();

require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address , " : ", await account.getBalance());
  }
})

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY1,process.env.NEXT_PUBLIC_PRIVATE_KEY2,process.env.NEXT_PUBLIC_PRIVATE_KEY3]
    },
  }
};