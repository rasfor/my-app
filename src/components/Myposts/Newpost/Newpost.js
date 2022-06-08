import module from './Newpost.module.css'

const Newpost = () => {
  return (
    <div className={module.newPost}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
  );
}

export default Newpost;