const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let ininitializeState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1
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
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.clickedPage }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
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

export const setCurrentPageAC = (clickedPage) => {
    return {
        type: SET_CURRENT_PAGE,
        clickedPage
    }
}

export const setUsersTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export default allUsersReducer;