import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { web3 } from '../utils/contractInstance'
import { addPlayer, getScore } from '../utils'
class Index extends React.Component {
  async componentDidMount() {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    // console.log(await addPlayer(accounts[0], 'tom'))
    console.log(await getScore(accounts[0]))
  }

  render() {
    return <Header />
  }
}

export default connect()(Index)
