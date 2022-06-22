import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

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
  _updateNewPostText(text) {
    this._state.profile.newPostText = text;
    this._renderPage(this);
  },
  _updateNewMessageText(text) {
    this._state.dialogs.newMessageText = text;
    this._renderPage(this);
  },
  _sendMessage() {
    let newId = this._state.dialogs.messages.length;
    let newMessage = { id: newId, messageText: this._state.dialogs.newMessageText, self: true };
    this._state.dialogs.messages.push(newMessage);
    this._renderPage(this);
  },
  _addPost() {
    let newId = this._state.profile.posts.length;
    let newPost = { id: newId, likeCount: 0, text: this._state.profile.newPostText };
    this._state.profile.posts.push(newPost);
    this._renderPage(this);
  },
  dispatch(action) {
    if (action.type == ADD_POST) {
      this._addPost();
    }
    else if (action.type == UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    }
    else if (action.type == UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newText)
    }
    else if (action.type == SEND_NEW_MESSAGE) {
      this._sendMessage();
    }
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