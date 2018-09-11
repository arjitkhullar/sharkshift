import React, { Component } from 'react'

// styled component(s)
import classes, { App, UserProfile, GamerScore } from './styles'

import * as utils from '../../utils'

const stubUser = {
  pic: '//image.ibb.co/jsjxfU/Selection_002.png',
  name: 'John Doe',
  lastLogin: '14 hours ago',
  score: '170',
  location: 'Toronto, Canada'
}

const stubachievements = [
  {
    id: 1,
    name: 'Game Name',
    achievements: ['one', 'two', 'three']
  },
  {
    id: 2,
    name: 'Game Name',
    achievements: ['one', 'two', 'three']
  },
  {
    id: 3,
    name: 'Game Name',
    achievements: ['one', 'two', 'three']
  },
  {
    id: 4,
    name: 'Game Name',
    achievements: ['one', 'two', 'three']
  }
]

const Profile = ({ user }) => (
  <UserProfile>
    <div className={classes.profileInfo}>
      <p className={classes.pic}>
        <img src={user.pic} />
      </p>
      <p>{user.name}</p>
      <p>Account#: {user.account}</p>
      <GamerScore>
        <p className="score">
          Score <span> {user.score}</span>
        </p>
      </GamerScore>
    </div>
  </UserProfile>
)

const Leaderboard = ({ achievements }) => (
  <div className={classes.leaderboard}>
    <h1>Achievements:</h1>
    <ul className={classes.list}>
      {achievements &&
        achievements.map(({ name, id, achievements }) => (
          <li key={`game_${id}`}>
            <span className={classes.gameName}>{name}</span>
            <span className={classes.achievements}>
              Achievements: {achievements.join(', ')}
            </span>
          </li>
        ))}
    </ul>
  </div>
)

class SharkShift extends Component {
  state = {}

  async componentDidMount() {
    const accounts = await utils.getAccount()
    const account = accounts[0]
    const user = await utils.getPlayer(account)
    console.log(user)
    const score = await utils.getScore(account)
    const achievements = await utils.getMyAchievemnets(account)
    this.setState({ user, account, achievements, score })
  }

  render() {
    const {
      state: { name, account, achievements, score }
    } = this

    return (
      <App>
        <Profile
          user={{
            name,
            account,
            score
          }}
        />
        <Leaderboard achievements={achievements} />
      </App>
    )
  }
}

export default SharkShift
