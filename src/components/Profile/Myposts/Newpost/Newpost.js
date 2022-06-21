import React from 'react';
import module from './Newpost.module.css'
import { createAddPostObj, createUpdateNewPostTextObj } from '../../../../redux/store'

const Newpost = (props) => {

  let newPostText = React.createRef();

  let addPost = () => {
    props.dispatch(createAddPostObj());
    props.dispatch(createUpdateNewPostTextObj(''))
  }

  let onNewPostChange = () => {
    let text = newPostText.current.value;
    props.dispatch(createUpdateNewPostTextObj(text))
  }

  return (
    <div className={module.newPost}>
      <div>
        <textarea ref={newPostText}
          value={props.profileState.newPostText}
          onChange={onNewPostChange} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
}

export default Newpost;