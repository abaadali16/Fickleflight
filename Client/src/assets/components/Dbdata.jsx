import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dbdata = () => {


  
  const [users, setUsers] = useState([])
  
  const [editUser, setEditUser] = useState(null)

  const [modal, setModal] = useState({
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users')
      setUsers(res.data.users)
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  }

  const handdleOpenModal = (user) => {
    setEditUser(user._id)
    setModal({
      name: user.name,
      email: user.email,
      phone: user.phone
    })
  }

  const handdleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`)
    fetchUsers() 
  } catch (err) {
    console.error("Delete failed", err)
  }
}


  const handdleChange = (e) => {
    setModal(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleUpdate = async () => {
  try {
    await axios.put(`http://localhost:5000/api/users/${editUser}`, modal)
    setEditUser(null)
    fetchUsers()
  } catch (err) {
    console.error("Update failed", err)
  }
}

  

  return (

    <div style={{ padding: '20px' }}>
      <h2>All Users</h2>
      <table border="1" cellPadding="10" cellSpacing="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>
                {editUser === user._id ? (
                  <input
                    name="name"
                    value={modal.name}
                    onChange={handdleChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editUser === user._id ? (
                  <input
                    name="email"
                    value={modal.email}
                    onChange={handdleChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editUser === user._id ? (
                  <input
                    name="phone"
                    value={modal.phone}
                    onChange={handdleChange}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editUser === user._id ?
                 (<button onClick={handleUpdate}>Save</button>) :
                 (<button onClick={() => handdleOpenModal(user)}>Edit</button>)}
                <button 
                onClick={()=>{
                  handdleDelete(user._id)
                }
                  
                }>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dbdata
