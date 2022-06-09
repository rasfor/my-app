import module from './Post.module.css'

const Post = (props) => {

  return (
    <div>
      <div className={module.item}>
        <img src={props.ava} />
        {props.message}
      </div>
      <span>likes {props.likeCount}</span>
    </div>
  );
}

export default Post;