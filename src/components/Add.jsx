import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../slices/PersonDetail';
import './Add.css'; // Import the CSS file

const Add = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(''); // State for error message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (name.length > 0 && email.length > 0) {
      const obj = { name, email };
      dispatch(add(obj));
      navigate("/");
      setName('');
      setEmail('');
      setError(''); // Clear error message on successful submission
    } else {
      setError('Enter complete details'); // Set error message
    }
  }

  return (
    <div className="container">
      <h2>Add New User Details</h2>
      {error && <div className="error">{error}</div>} {/* Conditionally render error message */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
