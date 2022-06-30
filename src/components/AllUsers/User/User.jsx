import module from './User.module.css'
import userPhoto from '../../../asserts/images/user.jpg'

const User = (props) => {
    return (
        <div className={module.user}>
            <span>
                <div>
                    <img src={props.userData.photos.small != null ? props.userData.photos.small : userPhoto} />
                </div>
                <div>
                    {props.userData.followed ?
                        <button onClick={() => { props.unfollow(props.userData.id) }}> Unfollow</button> :
                        <button onClick={() => { props.follow(props.userData.id) }}> Follow</button>}
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