import module from './Myposts.module.css'
import NewPost from './Newpost/Newpost';
import Post from './Post/Post';



const Myposts = (props) => {

   let commentElements = props.myPostState.comments.map(comment => <Post message={comment.message} ava={comment.ava} likeCount={comment.likeCount} />)

  return (
    <div className={module.posts}>
      <NewPost />
      <div>
        {commentElements}
      </div>
    </div>
  );
}

export default Myposts;