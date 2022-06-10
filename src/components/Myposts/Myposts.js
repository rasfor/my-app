import module from './Myposts.module.css'
import NewPost from './Newpost/Newpost'


const Myposts = (props) => {
  return (
    <div className={module.posts}>
      <NewPost />
      <div>
        {props.commentElements}
      </div>
    </div>
  );
}

export default Myposts;