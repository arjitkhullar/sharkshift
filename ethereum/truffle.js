module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      // host: "127.0.0.1",
      // port: 7545,
      network_id: '0',
      gas: 6700000,
      gasLimit: 6700000
    }
  },
  mocha: {
    useColors: true
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 5000000
    }
  }
};
