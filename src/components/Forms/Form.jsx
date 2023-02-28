import validate from './validate.js'
import React from 'react'
import styles from './Form.module.css';

export default function Form (props){
    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    })
    const [Errors, setErrors] = React.useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validate({
                ...userData,
                [name]: value
            })
        )
    };
    //form<onSubmit={''}
    return (
        <div>
            <form > 
                <label>Username: </label>
                <input 
                type="text"
                name= 'username'
                value= {userData.username}
                onChange = {handleChange}
                />
                <p className={styles.error}>
                    {Errors.username && Errors.username}
                </p>
                <br/>
                <label>Password: </label>
                <input 
                type="password"
                name= 'password'
                value= {userData.password}
                onChange = {handleChange}
                />
                <p className={styles.error}>
                    {Errors.password && Errors.password}
                </p>
                <hr/>
                <button>Loguear</button>
            </form>
        </div>
    );
}