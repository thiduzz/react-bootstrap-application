import Card from "../UI/Card";
import FormInput from "../UI/FormInput";
import styles from './UserCreateForm.module.scss'
import {useState} from "react";
import Button from "../UI/Button";

const UserCreateForm = (props) => {
    const[username, setUsername] = useState('')
    const[age, setAge] = useState('')
    const submitHandler = () => {
        if(username.trim().length <= 0 || age.trim().length <= 0){
            props.onError({title:"Invalid input", message:"Please enter a valid name and age (non-empty values)"})
            return;
        }
        const convertedAge = parseInt(age)
        if(convertedAge <= 0){
            props.onError({title:"Invalid input", message:"Please enter a a valid age ( > 0)"})
            return;
        }
        props.onCreate({username, age: convertedAge, id: Math.floor(Math.random() * 10000)})
    }
    return (
        <Card className={styles['create-form']}>
            <FormInput value={username}
                       label="Username"
                       onChange={(e) => setUsername(e.target.value)  }
            />
            <FormInput value={age}
                       label="Age"
                       type="number"
                       onChange={(e) => setAge(e.target.value)  }
            />
            <Button onClick={submitHandler}>Add</Button>
        </Card>
    )
}

export default UserCreateForm