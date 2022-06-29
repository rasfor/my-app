import * as axios from 'axios';
import User from './User/User'

const AllUsers = (props) => {

    if (props.users.length === 0)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)
        })

    let users = props.users.map((user) => {
        return <User key={user.id}
            userData={user}
            follow={props.follow}
            unfollow={props.unfollow} />
    })
    return (
        <div> {users}</div>
    )
}

export default AllUsers;