import module from './Post.module.css';
import Typography from '@mui/material/Typography';

const Post = (props) => {

  return (
    <div>
      <div className={module.item}>
      <div><img src='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' /></div>
          <div><Typography>{props.text}</Typography></div>
      </div>
      <Typography>likes: {props.likeCount}</Typography>
    </div>
  );
}

export default Post;