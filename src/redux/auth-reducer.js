const SET_AUTH_USER = 'SET_AUTH_USER'

let ininitializeState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false
}

const authUserReducer = (state = ininitializeState, action) => {
    switch(action.type) {
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
        type:SET_AUTH_USER,
        data: {
            userId,
            email,
            login
        }

    }
}

export default authUserReducer;