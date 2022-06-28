import module from './User.module.css'

const User = (props) => {
    return (
        <div className={module.user} key={props.userData.id}>
            <span>
                <div>
                    <img src='https://i.pinimg.com/280x280_RS/8c/3b/3e/8c3b3e4566431a90898d083961b2c0d6.jpg' />
                </div>
                <div>
                    {props.userData.followed ?
                        <button onClick={() => { props.unfollow(props.userData.id) }}> Unfollow</button> :
                        <button onClick={() => { props.follow(props.userData.id) }}> Follow</button>}
                </div>
            </span>
            <span>
                <div>
                    {props.userData.name}  {props.userData.age}
                </div>
                <div>
                    {props.userData.status} {props.userData.country}
                </div>
            </span>

        </div>
    )
}

export default User;