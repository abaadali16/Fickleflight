import React, { useState } from 'react';

const Crud = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');


  const handleAdd = () => {
    setItems([...items, input]);
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1> basic operations</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter item"

        />
        <button style={{ width: "50px" }}
          onClick={handleAdd}
        >
          ADD
        </button>
      </div>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {items.map((item, index) => (
          <li
            key={index}
          >
            <span>{item}</span>
            <div>
              <button
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Crud;


// Creat as Post
// Read as Get
// Update as Put/Patch 
// Delete as Delete
// Axios as https requestes to server