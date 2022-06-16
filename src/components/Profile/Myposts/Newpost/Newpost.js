import React from 'react';
import module from './Newpost.module.css'

const Newpost = (props) => {
  let newPostText = React.createRef();

  let addPost = ()=>{
    let postText = newPostText.current.value;
    props.newPostFn(postText);
  }

  return (
    <div className={module.newPost}>
      <div>
        <textarea ref={newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
}

export default Newpost;