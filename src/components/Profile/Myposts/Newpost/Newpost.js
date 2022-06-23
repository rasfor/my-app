import React from 'react';
import module from './Newpost.module.css'
import { createAddPostObj, createUpdateNewPostTextObj } from '../../../../redux/store'

const Newpost = (props) => {

  let newPostText = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onNewPostChange = () => {
    let text = newPostText.current.value;
    props.onNewPostChange(text)
  }

  return (
    <div className={module.newPost}>
      <div>
        <textarea ref={newPostText}
          value={props.newPostText}
          onChange={onNewPostChange} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
}

export default Newpost;