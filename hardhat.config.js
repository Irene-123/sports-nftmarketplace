require("@nomiclabs/hardhat-waffle");

const fs= require("fs")
const privateKey= fs.readFileSync(".secret").toString()
//const projectId= "4514444fef3b6db103abcc6d61b74603b43550da0b0edc16b5825e80c405f345"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    }, 
    kovan: {
      url: 'https://kovan.infura.io/v3/945bb572a54e4387ba780e66dd18fee4', 
      accounts: [privateKey]
    }, 
    mainnet: {
      url: 'https://mainnet.infura.io/v3/945bb572a54e4387ba780e66dd18fee4', 
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};