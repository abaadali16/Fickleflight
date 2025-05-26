import React, { useState } from 'react'
import axios from 'axios'

const SearchUser = () => {
  const [searchId, setSearchId] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${searchId}`)
      setUser(res.data.user)
      setError('')
    } catch (err) {
      setUser(null)
      setError('User not found or invalid ID')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search User by ID</h2>
      <input
        type="text"
        placeholder="Enter user ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        style={{ padding: '8px', marginRight: '10px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px 16px' }}>
        Search
      </button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Details:</h3>
          <p><strong>ID:</strong> {user._id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      )}
    </div>
  )
}

export default SearchUser
