import React, { Component } from 'react';
// styled component(s)
import styles, { App, UserProfile } from './styles';

const stubUser = {
  pic: '//image.ibb.co/jsjxfU/Selection_002.png',
  name: 'John Doe',
  lastLogin: '13 hours ago',
};

const Profile = ({ user = stubUser }) => (
  <UserProfile>
    <div className={styles.profileInfo}>
      <p className={styles.pic}>
        <img src={user.pic} />
      </p>
      <p>{user.name}</p>
      <p>Last seen: {user.lastLogin}</p>
    </div>
  </UserProfile>
);

class SharkShift extends Component {
  render() {
    return (
      <App>
        <Profile />
      </App>
    );
  }
}

export default SharkShift;
