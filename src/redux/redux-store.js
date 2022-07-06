import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import allUsersReducer from './allUsers-reducer';
import authUserReducer from './auth-reducer';
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: allUsersReducer,
  auth: authUserReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
