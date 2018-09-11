import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import SharkShift from '../pages/userProfile';
import Header from '../components/Header';
// import web3 from '../ethereum/web3';
class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
    // console.log(await web3.eth.getAccounts());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Header />;
  }
}

export default connect()(Index);
