import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import allUsersReducer from './allUsers-reducer';



let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  usersPage: allUsersReducer
})

let store = createStore(reducers);

window.store = store;

export default store;
