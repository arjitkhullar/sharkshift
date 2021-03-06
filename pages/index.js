import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import SharkShift from '../pages/userProfile'
import Header from '../components/Header'

import classes from './styles'

// import web3 from '../ethereum/web3';

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  async componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
    // console.log(await web3.eth.getAccounts());
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className={classes.pgLogin}>
        <div className="left" />
        <div className="right">
          <div className="inner">
            <p className="logo">Steaming</p>
            <p className="line1">
              Game management & anti-smurfing on the blockchain.
            </p>
            <div className="btns">
              <a href="/userProfile">
                <button>Login as Gamer</button>
              </a>
              <a href="/admin">
                <button>Login as Admin</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Index)
