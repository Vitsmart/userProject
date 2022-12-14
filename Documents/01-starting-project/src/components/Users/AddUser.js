import React,{useState} from "react";
import Card from "../UI/Card";
import './AddUserModule.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";


const AddUser = props => {
const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [error, setError] = useState();




const usernameChangedHandler = (event) => {
setEnteredUsername( event.target.value);
};




const ageChangedHandler = (event) => {setEnteredAge(event.target.value); 
};





const addUserHandler =(event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) { 
        setError({
            title: 'invalid input',
            message: 'Please enter a valid name (non-empty values)'
        });
        
        return;
     }
    if (+enteredAge < 1) {
        setError({
            title: 'invalid age',
            message: 'Please enter a valid age (> 0)'
        });
       
        return;
    };
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
};
const errorHandler =() => {
    setError(null);
};


    return (
        <div>
        {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)},
        <Card className="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username </label>
            <input 
            id="username" 
            type="text" 
            value={enteredUsername} 
            onChange={usernameChangedHandler}/>
            
            <label htmlFor="age">Age (Years)</label>
            <input 
            id="age" 
            type="number" 
            value={enteredUsername} 
            onChange={ageChangedHandler}/>
            <Button type="submit">Add user</Button>
        </form>
    </Card>
    </div>
    )
};



export default AddUser;