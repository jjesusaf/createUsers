import React, { useEffect, useState } from 'react';

const UsersForm = ({ userSelect, update, addUser, modal, modalClose }) => {

    //Form Variables

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthay] = useState("")

    useEffect(() => {
        if (userSelect !== null) {
            setFirst_name(userSelect.first_name)
            setLast_name(userSelect.last_name)
            setEmail(userSelect.email)
            setPassword(userSelect.password)
            setBirthay(userSelect.birthday)
        }else{
            reset()
        }
    }, [userSelect])

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

        if (userSelect) {
            update(newUser)
        } else {
            addUser(newUser)
        }
        reset()
    }

    const reset = () => {
        setFirst_name("")
        setLast_name("")
        setEmail("")
        setPassword("")
        setBirthay("")
    }


    return (
        <div className={modal}>
            <form action="" onSubmit={submit} className='userForm'>
                <div className='svgX'>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => modalClose()}><path fillRule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z" />
                    </svg>
                </div>
                <h1>
                    {userSelect ? "Edit User": "New User"}
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
        </div>

    );
};

export default UsersForm;