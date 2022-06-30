import Myposts from "./Myposts";
import { createUpdateNewPostTextObj, createAddPostObj } from "../../../redux/store";
import {connect} from 'react-redux'


let mapStateToProps = (state) =>{
  return {
    posts:state.profile.posts,
    newPostText:state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost:()=>{
      dispatch(createAddPostObj());
    },
    onNewPostChange: (newPostText)=>{
      dispatch(createUpdateNewPostTextObj(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);

export default MyPostsContainer;