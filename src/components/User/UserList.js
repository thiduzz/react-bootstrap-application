import './UserList.module.scss'
import UserListItem from "./UserListItem";

const UserList = (props) => {
    return <ul>
        { props.users.map((user) => <UserListItem user={user} key={user.id} onDelete={props.onUserDelete}/>)}
    </ul>

};

export default UserList