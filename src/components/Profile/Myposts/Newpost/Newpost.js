import React from 'react';
import module from './Newpost.module.css'

const Newpost = (props) => {
  
  let newPostText = React.createRef();

  let addPost = ()=>{
    props.newPostFn();
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