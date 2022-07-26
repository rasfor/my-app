import { profileApi } from '../api/api';
import {stopSubmit} from "redux-form";
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';
const DELETE_POST = 'DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';


let initialState = {
  posts: [{ id: 0, likeCount: 10, text: 'Naruto is the best!' },
  { id: 1, likeCount: 2, text: 'I love Sasuke!' },
  { id: 2, likeCount: 0, text: 'Sakura - це кринж' },
  { id: 3, likeCount: 15, text: 'I like team №7' }],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newId = state.posts.length;
      return {
        ...state,
        posts: [...state.posts, { id: newId, likeCount: 0, text: action.newPostText }]
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case DELETE_POST: {
      return [...state.posts.filter(p=> p.id !==action.postId )]
    }
    case GET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case UPDATE_PHOTO_SUCCESS: {
      return {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state;
  }

}

export let updatePhotoSuccess = (photos) => {
  return {
    type: UPDATE_PHOTO_SUCCESS,
    photos
  }
}

export let createAddPostObj = (newPostText) => ({
  type: ADD_POST,
  newPostText:newPostText
});

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

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const data = await profileApi.getProfile(userId)
      dispatch(setUserProfile(data));
  }
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileApi.getStatus(userId)
      dispatch(setStatus(response.data));
  }
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0)
      dispatch(setStatus(status));
  }
}

export const updatePhoto = (photo) => {
  return async (dispatch) => {
    const response = await profileApi.updatePhoto(photo);

    if (response.data.resultCode === 0)
      dispatch(updatePhotoSuccess(response.data.data.photos));
  }
}

// const hadleResponseError = (strError) => {
//   let contactErr = ""
//   if (strError.indexOf("Contacts") !== -1) {
//     contactErr = strError.split('->')[1].split(")")[0].toLowerCase()
//     return {
//       "contacts": {
//         contactErr: strError
//       }
//     }
//   }
//   else return {strError}
// }

export const saveProfile = (payload) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileApi.updateProfileData(payload);
    if (response.data.resultCode === 0)
      dispatch(getUserProfile(userId));
    else {
      // let err = hadleResponseError(response.data.messages[0])
      dispatch(stopSubmit("profileEdit",{_error:response.data.messages[0]}))
      return Promise.reject(response.data.messages[0]);
    }
  }
}

export default profileReducer;