import AllUsersC from './AllUsersC'
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/allUsers-reducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    }
  }
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersC);

export default AllUsersContainer;