import module from './Myposts.module.css'
import NewPost from './Newpost/Newpost';
import Post from './Post/Post';



const Myposts = (props) => {
  let posts = props.posts;
  let postElements = posts.map(post => <Post text={post.text} key={post.id} likeCount={post.likeCount} />)

  return (
    <div className={module.posts}>
      <NewPost newPostText={props.newPostText}
        addPost={props.addPost}/>
      <div>
        {postElements}
      </div>
    </div>
  );
}

export default Myposts;