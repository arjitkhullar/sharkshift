import React, { Component } from 'react';
// styled component(s)
import styles, { App, UserProfile, GamerScore } from './styles';

const stubUser = {
  pic: '//image.ibb.co/jsjxfU/Selection_002.png',
  name: 'John Doe',
  lastLogin: '14 hours ago',
  score: '170',
  rating: '7265',
  location: 'Toronto, Canada',
};

const Profile = ({ user = stubUser }) => (
  <UserProfile>
    <div className={styles.profileInfo}>
      <p className={styles.pic}>
        <img src={user.pic} />
      </p>
      <p>{user.name}</p>
      <p>Last seen: {user.lastLogin}</p>
      <GamerScore>
        <p className="score">
          Rank: <span> {user.score}</span>
        </p>
        <p className="rating">
          Rating: <span> {user.rating}</span>
        </p>
      </GamerScore>
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
