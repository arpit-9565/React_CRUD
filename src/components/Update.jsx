import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../slices/PersonDetail';
import './Update.css'; // Import the CSS file

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const people = useSelector((state) => state.person);

  useEffect(() => {
    const person = people.find(temp => temp.id === parseInt(id, 10));
    if (person) {
      setName(person.name);
      setEmail(person.email);
    }
  }, [id, people]);

  function submitHandler(event) {
    event.preventDefault();
    const obj = { id: parseInt(id, 10), name, email };
    dispatch(update(obj));
    navigate("/");
  }

  return (
    <div className="container">
      <h2>Update Details</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Update;
