import {authApi, securityApi} from '../api/api';
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let ininitializeState = {
    userId: null,
    email: null,
    login: null,
    isAuthorized: false,
    captchaUrl:null
}

const authUserReducer = (state = ininitializeState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }

}

export const setAuthUser = (userId, email, login,isAuthorized) => {
    return {
        type: SET_AUTH_USER,
        data: {
            userId,
            email,
            login,
            isAuthorized
        }

    }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL,
        payload: {captchaUrl}
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const response = await securityApi.getCaptcha();
        if (response.data.url) {
            dispatch(getCaptchaUrlSuccess(response.data.url))
        }

    }
}

export const getCurrentUser = () => {
    return async (dispatch) => {
        const response = await authApi.getCurrentUser();
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUser(id, email, login, true))
        }

    }
}

export const login = (payload) =>{
    return async (dispatch) => {
        const response = await authApi.login(payload)
        if (response.data.resultCode === 0) {
            dispatch(getCurrentUser());
        }
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
            dispatch(stopSubmit("login",{_error:message}));
        }
    }
}

export const logout = () =>{
    return async (dispatch) => {
        const response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false));
        }
    }
}


export default authUserReducer;