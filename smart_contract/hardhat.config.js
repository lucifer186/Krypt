// https://eth-mainnet.g.alchemy.com/v2/TIx4jx_4-u8OiPKzRjOw5XgX2GuhL1sG

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks:{
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/duqmpP9uAbOfGSmZWzbFUN41YyiMqokH',
      accounts: ['2c613a41b7a971855f6a727756aaa71afe4926fa25c47dc89023f4c944602ef1']
    }
  }
}