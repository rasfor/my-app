import * as axios from 'axios';
import User from './User/User';
import module from './AllUsers.module.css';
import React from 'react';

class AllUsersC extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        this.props.setUsers(response.data.items)
      })
    }
  }
  render() {
    return (
      <div className={module.users} >
        <button onClick={this.getUsers}> Get users</button>
        <div>
          {this.props.users.map((user) => {
            return <User key={user.id}
              userData={user}
              follow={this.props.follow}
              unfollow={this.props.unfollow} />
          })}
        </div>
      </div>
    )
  }
}

export default AllUsersC;