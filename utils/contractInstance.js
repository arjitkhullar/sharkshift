const Web3 = require('web3')
const currentProvider = new Web3.providers.HttpProvider('http://localhost:8545')
export const web3 = new Web3(currentProvider)

const SharkShift = require('../ethereum/build/contracts/SharkShift.json')
const Game = require('../ethereum/build/contracts/Game.json')
const truffleContract = require('truffle-contract')

export const getSharkShift = async () => {
  const Contract = truffleContract(SharkShift)
  Contract.setProvider(currentProvider)
  if (typeof Contract.currentProvider.sendAsync !== 'function') {
    Contract.currentProvider.sendAsync = function() {
      return Contract.currentProvider.send.apply(
        Contract.currentProvider,
        arguments
      )
    }
  }
  const instance = await Contract.deployed()
  return instance
}
export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts()
  return accounts[0]
}
export const deployGame = async (gameName, gameAchievements) => {
  const account = await getAccount()
  const instance = new web3.eth.Contract(Game.abi)
    .deploy({
      data: Game.bytecode,
      arguments: [gameName, gameAchievements]
    })
    .send({
      from: account,
      gas: 1500000
    })
  return instance
}
