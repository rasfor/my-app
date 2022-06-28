import User from './User/User'

const AllUsers = (props) => {
    if (props.users.length === 0)
        props.setUsers([
            { id: 0, name: 'Timur', age: 23, status: 'Doter', city: 'Kazan', country: 'Russia', followed: false },
            { id: 1, name: 'Babahan', age: 24, status: 'Stalker', city: 'Kazan', country: 'Russia', followed: true },
            { id: 2, name: 'Zulfiya', age: 23, status: 'Pie', city: 'Kazan', country: 'Russia', followed: false },
            { id: 3, name: 'Gulshatik', age: 19, status: 'Booklover', city: 'Kazan', country: 'Russia', followed: false }
        ]);

    let users = props.users.map((user) => {
        return <User
            userData={user}
            follow={props.follow}
            unfollow={props.unfollow} />
    })
    return (
        <div> {users}</div>
    )
}

export default AllUsers;