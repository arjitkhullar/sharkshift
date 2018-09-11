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

export const addGame = async (instance, account) => {
  await getSharkShift().addGame(instance, account)
}
export const deployAndGetGame = async () => {
  const account = web3.eth.accounts[0]
  const compiled = JSON.parse(Game)
  const networks = compiled.networks
  const networkKeys = Object.keys(networks)
  console.log(compiled, networkKeys, networks)
  web3.eth
    .deploy({
      data: JSON.parse(Game).bytecode,
      arguments: [
        account,
        networks[networkKeys[networkKeys.length - 1]].address
      ]
    })
    .send({
      from: account,
      gas: 150000000
    })
  const Contract = truffleContract(Game)
  Contract.setProvider(currentProvider)
  const instance = await Contract.deployed()
  await addGame(instance, account)
  return instance
}
