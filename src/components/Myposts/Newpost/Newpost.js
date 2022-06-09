import module from './Newpost.module.css'

const Newpost = () => {
  return (
    <div className={module.newPost}>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
  );
}

export default Newpost;