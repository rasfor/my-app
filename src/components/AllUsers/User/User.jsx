import module from './User.module.css'
import userPhoto from '../../../asserts/images/user.jpg'
import { NavLink } from 'react-router-dom'
import {userApi} from '../../../api/api';


const User = (props) => {
    return (
        <div className={module.user}>
            <span>
                <div>
                    <NavLink to={'/profile/'+props.userData.id}>
                        <img src={props.userData.photos.small != null ? props.userData.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {props.userData.followed ? 
                        <button disabled={props.followingProcess.some(id=> id ===props.userData.id)} onClick={() => { 
                            props.setFollowingProcess(true,props.userData.id);
                            userApi.unfollow(props.userData.id).then((data)=>{
                                if (data.resultCode === 0)
                                    props.unfollow(props.userData.id) 
                                    props.setFollowingProcess(false, props.userData.id);
                              })
                            }}> Unfollow</button> :
                        <button disabled={props.followingProcess.some(id => id === props.userData.id)} onClick={() => { 
                            props.setFollowingProcess(true, props.userData.id);
                            userApi.follow(props.userData.id).then((data)=>{
                                if (data.resultCode === 0)
                                    props.follow(props.userData.id);
                                    props.setFollowingProcess(false, props.userData.id); 
                              })
                            }}> Follow</button>}
                </div>
            </span>
            <span className={module.content}>
                <div>
                    {props.userData.name}
                </div>
                <div>
                    {props.userData.status !== null ? props.userData.status : 'without status'}
                </div>
            </span>

        </div>
    )
}

export default User;