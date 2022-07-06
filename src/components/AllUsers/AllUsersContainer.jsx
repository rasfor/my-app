import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, getUsers } from '../../redux/allUsers-reducer';
import AllUsers from './AllUsers';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class AllUsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (clickedPage) => {
    this.props.getUsers(clickedPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <AllUsers users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingProcess={this.props.followingProcess}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProcess: state.usersPage.followingProcess
  }
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  getUsers
})(AllUsersContainer);;