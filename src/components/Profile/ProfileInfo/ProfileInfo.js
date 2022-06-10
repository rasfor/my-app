import module from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={module.currentUser}>
      <img src='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
      <div>
        Description
      </div>
    </div>
  )
}

export default ProfileInfo;