const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
  { id: 1, likeCount: 2, text: 'I love Sasuke!' },
  { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
  { id: 3, likeCount: 15, text: 'I like team №7' }],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newId = state.posts.length;
      let newPost = { id: newId, likeCount: 0, text: state.newPostText };
      state.posts.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

}
export default profileReducer;