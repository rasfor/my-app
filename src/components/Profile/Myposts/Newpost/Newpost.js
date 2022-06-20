import React from 'react';
import module from './Newpost.module.css'

const Newpost = (props) => {

  let newPostText = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }

  let onNewPostChange = () => {
    let newText = newPostText.current.value;
    props.updateNewPostText(newText);
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