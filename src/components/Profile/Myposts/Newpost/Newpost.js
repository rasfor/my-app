import React from 'react';
import module from './Newpost.module.css'

const Newpost = (props) => {

  let newPostText = React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
    props.dispatch({type:'UPDATE-TEXTAREA', newText:''})
  }

  let onNewPostChange = () => {
    let text = newPostText.current.value;
    props.dispatch({type:'UPDATE-TEXTAREA', newText:text})
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