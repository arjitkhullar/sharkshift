import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { web3 } from '../utils/contractInstance'
import { addPlayer, getScore } from '../utils'
class Index extends React.Component {
  async componentDidMount() {
    console.log(await web3.eth.getAccounts())
    console.log(
      await addPlayer(
        web3.eth.getAccounts()[0],
        'tom',
        web3.eth.getAccounts()[0]
      )
    )
    console.log(await getScore(web3.eth.getAccounts()[0]))
  }

  render() {
    return <Header />
  }
}

export default connect()(Index)
