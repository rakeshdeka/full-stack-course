import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

// https://jsonplaceholder.typicode.com/users

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(users)

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then((data) => {
  //       setUsers(data)
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       setLoading(false)
  //     })

  // })

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getUsers()
  }, []);

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2> User List from Mock data</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p> Name: {user.name}</p>
          <p> Email: {user.email}</p>
        </div>
      ))}

    </div>
  )
}

export default App


