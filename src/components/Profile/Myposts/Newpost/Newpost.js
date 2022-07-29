import React from 'react';
import module from './Newpost.module.css';
import NewPostReduxForm from "./NewPostReduxForm/NewPostReduxForm";

const Newpost = (props) => {

  let addNewPost = (values) => {
      props.addPost(values.newPostText);
  }

  return (
    <div className={module.newPost}>
        <NewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
}

export default Newpost;