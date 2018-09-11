import React, { Fragment } from 'react'
import { addGame } from '../utils'
import { web3 } from '../utils/contractInstance'

import classes from './styles'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: '',
      currentAchievement: '',
      achievements: [],
      account: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.submit = this.submit.bind(this)
  }

  async componentDidMount() {
    this.setState({
      account: await web3.eth.getAccounts()
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePress(e) {
    if (e.key === 'Enter') {
      let temp = this.state.achievements
      temp.push(e.target.value)
      this.setState({
        achievements: temp,
        currentAchievement: ''
      })
    }
  }

  async submit() {
    console.log(this.state)
    await addGame(
      this.state.account,
      this.state.gameName,
      this.state.achievements
    )
  }

  render() {
    return (
      <div className={classes.pgAdmin}>
        <div className="inner">
          <h4>Admin Panel</h4>
          <h2>Input Game Details</h2>

          <label>Game Name</label>
          <input
            name="gameName"
            placeholder="e.g. Jamestown..."
            type="text"
            onChange={this.handleChange}
          />

          <label>Achievements</label>
          <input
            type="text"
            placeholder="e.g. some achievement"
            name="currentAchievement"
            value={this.state.currentAchievement}
            onChange={this.handleChange}
            onKeyPress={this.handlePress}
          />

          {this.state.achievements.map((tag, id) => {
            return (
              <span className="tag" key={id}>
                {tag}
              </span>
            )
          })}

          <button onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Admin
