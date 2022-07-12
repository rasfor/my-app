import { authApi } from '../api/api'
const SET_AUTH_USER = 'SET_AUTH_USER'

let ininitializeState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
}

const authUserReducer = (state = ininitializeState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data,
                isAuthorized: true
            }
        }
        default:
            return state;
    }

}

export const setAuthUser = (userId, email, login) => {
    return {
        type: SET_AUTH_USER,
        data: {
            userId,
            email,
            login
        }

    }
}

export const getCurrentUser = () => {
    return (dispatch) => {
        authApi.getCurrentUser().then((response) => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUser(id, email, login))
            }
        })
    }
}

export const login = (payload) =>{
    return (dispatch) => {
        debugger
        authApi.login(payload).then((response) => {
            debugger
            if (response.data.resultCode === 0) {
                let data = {
                    userId:response.data.userId,
                    email: payload.email,
                    login: payload.login
                }
                dispatch(setAuthUser(data));
            }
        })
    }
}

export default authUserReducer;