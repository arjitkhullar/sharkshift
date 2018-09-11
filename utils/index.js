const { getSharkShift, deployAndGetGame, web3 } = require('./contractInstance')
const GAS = 1500000

export const getAccount = async () => {
  const accounts = await web3.eth.getAccounts()
  return accounts[0]
}
export const addPlayer = async (address, name) => {
  const instance = await getSharkShift()
  const from = await getAccount()
  return await instance.addPlayer(address, name, {
    from,
    gas: GAS
  })
}
export const getScore = async (address) => {
  const instance = await getSharkShift()
  const from = await getAccount()
  const score = await instance.getScore(address, {
    from,
    gas: GAS
  })
  return Number(score)
}
