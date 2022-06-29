import * as axios from 'axios';
import User from './User/User';
import module from './AllUsers.module.css';

const AllUsers = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items)
            })
        }
    }

    let users = props.users.map((user) => {
        return <User key={user.id}
            userData={user}
            follow={props.follow}
            unfollow={props.unfollow} />
    })
    return (
        <div className={module.users}>
            <button onClick={getUsers}> Get users</button>
            <div>
                {users}
            </div>
        </div>
    )
}

export default AllUsers;