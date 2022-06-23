import Myposts from "./Myposts";
import { createUpdateNewPostTextObj, createAddPostObj } from "../../../redux/store";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(createAddPostObj());
  }

  let onNewPostChange = (newPostText) => {
    props.store.dispatch(createUpdateNewPostTextObj(newPostText))
  }

  return (
    <Myposts posts={state.profile.posts}
      newPostText={state.profile.newPostText}
      addPost={addPost}
      onNewPostChange={onNewPostChange}
    />
  );
}

export default MyPostsContainer;