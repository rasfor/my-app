const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let ininitializeState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingProcess: [2,5]
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
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {...state, 
                followingProcess: action.followingProcess
                ? [...state.followingProcess, action.userId]
                : state.followingProcess.filter(id => id !=action.userId)}
        }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (clickedPage) => {
    return {
        type: SET_CURRENT_PAGE,
        clickedPage
    }
}

export const setUsersTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}

export const setFollowingProcess = (followingProcess, userId) => {
    return {
        type:TOGGLE_IS_FOLLOWING,
        followingProcess,
        userId
    }
}

export default allUsersReducer;