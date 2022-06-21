const ADD_POST = 'ADD_POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
        { id: 1, messageText: 'Hello' },
        { id: 2, messageText: 'Yo' },
        { id: 3, messageText: 'Watashi backa' },
        { id: 4, messageText: 'kek' },
        { id: 5, messageText: 'chebureck' }
      ],

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
  }
}

export let createAddPostObj = () => ({ type: ADD_POST });

export let createUpdateNewPostTextObj = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

window.store = store;

export default store;