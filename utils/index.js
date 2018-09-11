const { getSharkShift, deployGame, web3 } = require('./contractInstance')
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

export const addGame = async (playerAddress, gameName, gameAchievements) => {
  const instance = await getSharkShift()
  const gameContract = await deployGame(gameName, gameAchievements)
  const from = await getAccount()

  console.dir(gameContract)
  console.dir(gameContract._address)
  const txHash = await instance.addGame(gameContract._address, playerAddress, {
    from,
    gas: 1500000
  })
  console.log(txHash)
  return txHash
}

export const getGames = async (address) => {
  const instance = await getSharkShift()
  return await instance.getGames.call(address)
}

export const getPlayer = async (address) => {
  const instance = await getSharkShift()
  const players = await instance.players
  const player = await players.call(address)
  console.dir(player)
  return player
}
