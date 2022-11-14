import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'

function App() {

  //Data extraction 

  const [dataUsers, setDataUsers] = useState([])
  const [userSelect, setUserSelect] = useState(null)

  useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setDataUsers(res.data))
  },[])
  
  const selectUser = (user) => {
    setUserSelect(user)
  }
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setDataUsers(res.data) )
  }

  const addUser = (newUser) => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(() => getUsers())
  }

  const update = (editUser) =>{ 
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, editUser)
      .then(() => getUsers())
  }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  return (
    <div className="App">
      <UsersForm userSelect={userSelect} update={update} addUser={addUser}/>
      <UsersList dataUsers={dataUsers} selectUser={selectUser} deleteUser={deleteUser} />
    </div>
  )
}

export default App
