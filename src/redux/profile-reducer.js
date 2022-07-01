const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
  { id: 1, likeCount: 2, text: 'I love Sasuke!' },
  { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
  { id: 3, likeCount: 15, text: 'I like team №7' }],
  newPostText: '',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state};

  switch (action.type) {
    case ADD_POST:{
      let newId = state.posts.length;
      let body = stateCopy.newPostText;
      return {
        ...state,
        newPostText:'',
        posts:[...state.posts,{id: newId, likeCount: 0, text: body}]
      }
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }

}

export const setUserProfile = (profile)=> {
  return {
    type:SET_USER_PROFILE,
    profile
  }
}

export default profileReducer;