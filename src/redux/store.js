import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let store = {
  _state: {
    profile: {
      posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
      { id: 1, likeCount: 2, text: 'I love Sasuke!' },
      { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
      { id: 3, likeCount: 15, text: 'I like team №7' }],
      newPostText: ''
    },
    dialogs: {
      messages: [
        { id: 1, messageText: 'Hello', self: true },
        { id: 2, messageText: 'Yo', self: false },
        { id: 3, messageText: 'Watashi backa', self: true },
        { id: 4, messageText: 'kek', self: false },
        { id: 5, messageText: 'chebureck', self: true }
      ],
      newMessageText: '',
      contacts: [
        { id: 1, name: 'Hinata' },
        { id: 2, name: 'Sasuke' },
        { id: 3, name: 'Sakura' },
        { id: 4, name: 'Kakashi' }
      ]
    }

  },
  getState() {
    return this._state;
  },
  _renderPage() {
    console.log("State was changed");
  },
  subscribe(observer) {
    this._renderPage = observer;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._renderPage(this);

  }
}

export let createAddPostObj = () => ({ type: ADD_POST });

export let createUpdateNewPostTextObj = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export let createUpdateNewMessageTextObj = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}

export let createSendMessageObj = () => {
  return { type: SEND_NEW_MESSAGE };
}

window.store = store;

export default store;