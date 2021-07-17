import './App.css';
import UserCreateForm from "./components/User/UserCreateForm";
import Dialog from "./components/UI/Dialog";
import {useState} from "react";
import UserList from "./components/User/UserList";

function App() {
    const [error, setError ] = useState(null)
    const [users, setUsers ] = useState([
        {id: 1, username: 'Thiago', age: 10},
        {id: 2, username: 'Ana', age: 23},
        {id: 3, username: 'Zoe', age: 55},
    ])
    const onValidationErrorHandler = (error) => {
        setError(error)
    }
    const onUserCreateHandler = (user) => {
        setUsers((prevUsers) => [user, ...prevUsers])
    }
    const onUserDeleteHandler = (deletedUser) => {
        setUsers((prevUsers) => {
           return prevUsers.filter((user) => user.id !== deletedUser.id)
        })
    }
    return (
    <div className="h-screen w-full bg-gray-100">
        <div className="flex flex-col items-center justify-center h-full">
            <UserCreateForm onError={onValidationErrorHandler} onCreate={onUserCreateHandler} />
            <UserList users={users} onUserDelete={onUserDeleteHandler}/>
        </div>
        { error ? <Dialog onClose={ () => setError(null)}>
            <div>
                <h1>{error.title}</h1>
                <p>{error.message}</p>
            </div>
        </Dialog> : ''}
    </div>
  );
}

export default App;
