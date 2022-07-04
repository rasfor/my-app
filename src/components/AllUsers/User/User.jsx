import module from './User.module.css'
import userPhoto from '../../../asserts/images/user.jpg'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';

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
                        <button onClick={() => { 
                            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/'+props.userData.id,{
                                withCredentials:true,
                                headers: {
                                    'API-KEY':'0d8d272d-7a56-482f-bdd4-e713c785aef3'
                                }
                              }).then((response)=>{
                                if (response.data.resultCode === 0)
                                    props.unfollow(props.userData.id) 
                              })
                            }}> Unfollow</button> :
                        <button onClick={() => { 
                            axios.post('https://social-network.samuraijs.com/api/1.0/follow/'+props.userData.id,{},{
                                withCredentials:true,
                                headers: {
                                    'API-KEY':'0d8d272d-7a56-482f-bdd4-e713c785aef3'
                                }
                              }).then((response)=>{
                                if (response.data.resultCode === 0)
                                    props.follow(props.userData.id) 
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