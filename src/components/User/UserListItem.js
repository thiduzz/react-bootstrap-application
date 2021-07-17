import styles from './UserListItem.module.scss'
import {useState} from "react";
const UserListItem = (props) => {
    const [isHovering, setIsHovering ] = useState(false)
    const mouseOverHandler = () => {
        setIsHovering(() => true);
    };

    const mouseOutHandler = () => {
        setIsHovering(() => false);
    };

    const onDeleteHandler = () => {
        console.log(props.user)
        props.onDelete(props.user)
    }

    return (<li className={styles['user-list-item']} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}  onClick={onDeleteHandler}>
        <div>
            <div>{props.user.username}</div>
            <div className={styles['age-label']}>Age: {props.user.age}</div>
        </div>
        {isHovering && <div className="p-2">❌</div>}
    </li>)
}
export default UserListItem;