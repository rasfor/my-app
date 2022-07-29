import { userApi } from '../api/api'
import {updateObjectInArray} from "../utils/object-helpers";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';
const FAKE = 'FAKE';

let ininitializeState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingProcess: [2, 5],
    fake: 0
};

const allUsersReducer = (state = ininitializeState, action) => {
    switch (action.type) {
        case FAKE: {
            return {...state,
                fake:state.fake + 1
        }}
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )

            };
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
            return {
                ...state,
                followingProcess: action.followingProcess
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
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
        type: TOGGLE_IS_FOLLOWING,
        followingProcess,
        userId
    }
}

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const data = await userApi.getUsers(currentPage, pageSize)
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage));
            dispatch(setIsFetching(false));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingProcess(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0)
        dispatch(actionCreator(userId))
    dispatch(setFollowingProcess(false, userId));
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userApi.unfollow.bind(userApi), unfollowSuccess)
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userApi.follow.bind(userApi), followSuccess)

    }
}

export default allUsersReducer;