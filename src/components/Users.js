import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsersInfo } from '../actions/userActions'

class UsersInfo extends Component {
  componentDidMount() {
    this.props.fetchUsersInfo()
  }

  render() {

    const usersInfo = this.props.users.map((user, i) => {
      return (
        <tr key={i}>
          <th scope="row">{user.firstName}</th>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.date}</td>
        </tr>
      )
    })

    return (
      <div className='mt-4'>
        <h1>Get Events</h1>
        <table className="table bg table-hover">
          <thead className='table-info'>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Event Date</th>
            </tr>
          </thead>
          <tbody>
            {usersInfo}
          </tbody>
        </table>
      </div>
    )
  }
}

UsersInfo.propTypes = {
  fetchUsersInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  users: state.userinfo.users,
})

export default connect(mapStateToProps, { fetchUsersInfo })(UsersInfo)
