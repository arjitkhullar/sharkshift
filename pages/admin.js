import React, { Fragment } from 'react'

import classes from './styles'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className={classes.pgAdmin}>
        <h4>Admin Panel</h4>
        <h2>Input Game Details</h2>

        <input name="" />
      </div>
    )
  }
}

export default Admin
