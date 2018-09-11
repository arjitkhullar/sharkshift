import React, { Component } from 'react'
// styled component(s)
import styles, { App, UserProfile } from './styles'
import Header from '../../components/Header'

const stubUser = {
  pic: '//image.ibb.co/jsjxfU/Selection_002.png',
  name: 'John Doe'
}

const Profile = ({ user = stubUser }) => (
  <UserProfile>
    <div className={styles.profileInfo}>
      <p className={styles.pic}>
        <img src={user.pic} />
      </p>
      <p>{user.name}</p>
    </div>
  </UserProfile>
)

class SharkShift extends Component {
  render() {
    return (
      <App>
        <Header />
        <Profile />
      </App>
    )
  }
}

export default SharkShift