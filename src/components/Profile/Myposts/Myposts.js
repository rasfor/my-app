import module from './Myposts.module.css'
import NewPost from './Newpost/Newpost';
import Post from './Post/Post';



const Myposts = (props) => {
  let posts = props.posts;
  let postElements = posts.map(post => <Post text={post.text} likeCount={post.likeCount} />)

  return (
    <div className={module.posts}>
      <NewPost newPostText={props.newPostText}
        addPost={props.addPost}
        onNewPostChange={props.onNewPostChange} />
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default Myposts;