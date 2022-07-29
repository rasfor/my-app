import {getCurrentUser} from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED';

let ininitializeState = {
    initialized: false
}

const appReducer = (state = ininitializeState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized:true
            }
        }
        default:
            return state;
    }

}

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initialize = () => {
    return (dispatch) => {
        let promises = [];
        promises.push(dispatch(getCurrentUser()));
        Promise.all(promises).then(()=>{
            dispatch(setInitialized());
        })
    }
}


export default appReducer;