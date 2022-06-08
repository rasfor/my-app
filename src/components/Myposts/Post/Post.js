import module from './Post.module.css'

const Post = (props) => {

  return (
    <div className={module.item}>
      <img src={props.ava} />
      {props.message}
    </div>
  );
}

export default Post;