import Myposts from "./Myposts";
import { createAddPostObj } from "../../../redux/profile-reducer";
import {connect} from 'react-redux'


let mapStateToProps = (state) =>{
  return {
    posts:state.profile.posts,
    newPostText:state.profile.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost:(newPostText)=>{
      dispatch(createAddPostObj(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);

export default MyPostsContainer;