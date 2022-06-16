import module from './Post.module.css'

const Post = (props) => {

  return (
    <div>
      <div className={module.item}>
      <img src='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
        {props.text}
      </div>
      <span>likes {props.likeCount}</span>
    </div>
  );
}

export default Post;