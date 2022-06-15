import React from 'react';
import module from './Newpost.module.css'

const Newpost = () => {

  let newPostText = React.createRef();

  let addPost = ()=>{
    debugger;
    let postText = newPostText.current.value;
    alert(postText);
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