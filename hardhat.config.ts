import "@nomiclabs/hardhat-ethers"

export default {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    intersectTestnet: {
      url: "https://subnets.avax.network/pearl/testnet/rpc", // Update this with the actual RPC URL if available
      chainId: 1612,
      gasPrice: 225000000000,
      accounts: ["PRIVATE_KEY"],
    },
  },
}

// Deployed a smart contract...
// { AVAXGods: '0xeB1a8410F256b5015a6081C83447234E509cd549' }
