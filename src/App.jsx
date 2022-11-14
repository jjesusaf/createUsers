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
  const [modal, setModal] = useState("modal")

  const modalOpen = () => {
    setModal("modal is-open")
  }

  const modalClose = () => {
    setModal("modal")
    setUserSelect(null)
  }
  
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setDataUsers(res.data))
  }, [])

  console.log(dataUsers)

  const selectUser = (user) => {
    setUserSelect(user)
    modalOpen()
  }
  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setDataUsers(res.data))
  }

  const addUser = (newUser) => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(() => getUsers()) 
      .catch(error=>alert(error.response?.data?.email[0]))
      modalClose()
  }

  const update = (editUser) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, editUser)
      .then(() => getUsers())
      modalClose()
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  

 

  return (
    <div className="App">
      <nav className='Navbar'>
        <h1>Users</h1>
        <button onClick={() => modalOpen()}>+ Create new user</button>
      </nav>
      <UsersForm userSelect={userSelect} update={update} addUser={addUser} modal={modal} modalClose={modalClose}/>
      <UsersList dataUsers={dataUsers} selectUser={selectUser} deleteUser={deleteUser}  />
    </div>
  )
}

export default App
