import React, { useEffect, useState } from 'react';

const UsersForm = ({userSelect, update, addUser}) => {

    //Form Variables

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthay] = useState("")

    useEffect(()=>{
        if(userSelect !== null){
            setFirst_name(userSelect.first_name)
            setLast_name(userSelect.last_name)
            setEmail(userSelect.email)
            setPassword(userSelect.password)
            setBirthay(userSelect.birthday)
        }
    },[userSelect])

    //Submit

    const submit = (e) => {
        e.preventDefault()
        
        const newUser = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }

        if(userSelect){
            update(newUser)
        }else{
            addUser(newUser)
        }

    }


    return (
        <form action="" onSubmit={submit  } className='userForm'>
            <h1>
                New User
            </h1>
            <div className="input-container">
                <label htmlFor="first_name">
                    Name
                </label>
                <input 
                type="text"
                id='first_name'
                onChange={(e) => setFirst_name(e.target.value)}
                value={first_name}
                />
            </div>
            <div className="input-container">
                <label htmlFor="last_name">
                    Last name
                </label>
                <input 
                type="text"
                id='last_name'
                onChange={(e) => setLast_name(e.target.value)}
                value={last_name}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                type="text"
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">
                    Password
                </label>
                <input 
                type="password"
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="input-container">
                <label htmlFor="birthday">
                    Birthday
                </label>
                <input 
                type="date"
                id='birthday'
                onChange={(e) => setBirthay(e.target.value)}
                value={birthday}
                />
            </div>
            <button>
                Save changes
            </button>
        </form>
    );
};

export default UsersForm;