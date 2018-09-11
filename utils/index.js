const { getSharkShift, deployAndGetGame, web3 } = require('./contractInstance')
const GAS = 1500000
// module.exports = function(deployer) {
//   deployer.deploy(SharkShift)
// }
// class Uitls {
//   constructor() {}
// }

export const addPlayer = async (address, name) => {
  const instance = await getSharkShift()
  const accounts = await web3.eth.getAccounts()
  console.dir(instance)
  console.log({ address, name, accounts })
  return await instance.addPlayer(address, name, {
    from: accounts[0],
    gas: GAS
  })
}
export const getScore = async (address) => {
  const instance = await getSharkShift()
  const accounts = await web3.eth.getAccounts()

  return await instance.getScore(address, {
    from: accounts[0],
    gas: GAS
  })
}
