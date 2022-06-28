const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let ininitializeState = {
    users: []
};

const allUsersReducer = (state = ininitializeState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.userId)
                        return { ...user, followed: true }
                    else return user;
                })
            };

            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id == action.userId)
                        return { ...user, followed: false }
                    else return user;
                })
            };

            return stateCopy;
        }
        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default allUsersReducer;