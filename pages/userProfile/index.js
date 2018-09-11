import React, { Component } from 'react';

// styled component(s)
import classes, { App, UserProfile, GamerScore } from './styles';

const stubUser = {
  pic: '//image.ibb.co/jsjxfU/Selection_002.png',
  name: 'John Doe',
  lastLogin: '14 hours ago',
  score: '170',
  rating: '7265',
  location: 'Toronto, Canada',
};

const stubachievements = [
  {
    id: 1,
    name: 'Game Name',
    achievements: ['one', 'two', 'three'],
  },
  {
    id: 2,
    name: 'Game Name',
    achievements: ['one', 'two', 'three'],
  },
  {
    id: 3,
    name: 'Game Name',
    achievements: ['one', 'two', 'three'],
  },
  {
    id: 4,
    name: 'Game Name',
    achievements: ['one', 'two', 'three'],
  },
];

const Profile = ({ user }) => (
  <UserProfile>
    <div className={classes.profileInfo}>
      <p className={classes.pic}>
        <img src={user.pic} />
      </p>
      <p>{user.name}</p>
      <p>Last seen: {user.lastLogin}</p>
      <GamerScore>
        <p className="score">
          Rank <span> {user.score}</span>
        </p>
        <p className="rating">
          Rating <span> {user.rating}</span>
        </p>
      </GamerScore>
    </div>
  </UserProfile>
);

const Leaderboard = ({ achievements }) => (
  <div className={classes.leaderboard}>
    <ul className={classes.list}>
      {achievements.map(({ name, id, achievements }) => (
        <li key={`game_${id}`}>
          Game
          <span className={classes.gameName}>{name}</span>
          <span className={classes.achievements}>
            {achievements.join(', ')}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

class SharkShift extends Component {
  render() {
    return (
      <App>
        <Profile user={stubUser} />
        <Leaderboard achievements={stubachievements} />
      </App>
    );
  }
}

export default SharkShift;
