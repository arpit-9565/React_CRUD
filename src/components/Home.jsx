import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../slices/PersonDetail';
import './Home.css'; // Import the CSS file

const Home = () => {
  const people = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>CRUD Operation using React</h1>
      <Link to="/add" className="link-button">
        <button type="button">Create+</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td className="actions">
                <button type="button" onClick={() => navigate(`/update/${person.id}`)}>Update</button>
                <button type="button" className="delete" onClick={() => dispatch(remove(person.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
