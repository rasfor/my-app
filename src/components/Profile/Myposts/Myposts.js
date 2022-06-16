import module from './Myposts.module.css'
import NewPost from './Newpost/Newpost';
import Post from './Post/Post';



const Myposts = (props) => {

  let postElements = props.myPostState.posts.map(post => <Post text={post.text} likeCount={post.likeCount} />)

  return (
    <div className={module.posts}>
      <NewPost newPostFn={props.newPostFn} 
        updateNewPostText={props.updateNewPostText} 
        newPostText={props.myPostState.newPostText}/>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default Myposts;