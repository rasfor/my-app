import { profileApi } from '../api/api';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';


let initialState = {
  posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
  { id: 1, likeCount: 2, text: 'I love Sasuke!' },
  { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
  { id: 3, likeCount: 15, text: 'I like team №7' }],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_POST: {
      let newId = state.posts.length;
      let body = stateCopy.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: newId, likeCount: 0, text: body }]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
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
    case GET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }

}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const setStatus = (status) => {
  return {
    type: GET_STATUS,
    status
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    })
  }
}

export default profileReducer;