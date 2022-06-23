import Myposts from "./Myposts";
import { createUpdateNewPostTextObj, createAddPostObj } from "../../../redux/store";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

  return (
    <StoreContext.Consumer >
      {
        (store) => {

          let state = store.getState();

          let addPost = () => {
            store.dispatch(createAddPostObj());
          }

          let onNewPostChange = (newPostText) => {
            store.dispatch(createUpdateNewPostTextObj(newPostText))
          }
          return <Myposts posts={state.profile.posts}
            newPostText={state.profile.newPostText}
            addPost={addPost}
            onNewPostChange={onNewPostChange}
          />
        }
      }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;