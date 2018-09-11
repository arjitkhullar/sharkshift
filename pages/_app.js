import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

// styled component(s)
import { containerStyle } from '../components/app/styles';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container className={containerStyle}>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
