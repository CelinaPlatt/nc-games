import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../contexts/Users';
import '../styles/Login.css';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [user, setUser] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [loggedInUser, setLoggedInUser] = useState('');

  const { users } = useContext(UsersContext);
  console.log(users, 'users');

  const validateUserName = () => {
    setUsernameErr('');
    const userMatch = users.filter((user) => {
      return usernameInput === user.username;
    });
    const userMatched = userMatch[0];
    if (userMatched) {
      setUser(userMatched);
    } else {
      setUsernameErr(`Oops that user isn't register with us yet`);
    }
  };

  const resetErr = () => {
    if (usernameErr) {
      setUsernameErr('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === nameInput) {
      setLoggedInUser(user);
    } else {
      setNameErr('Oops! wrong username or name');
    }

    setUsernameInput('');
    setNameInput('');
  };

  console.log(usernameInput, '<<username');
  console.log(nameInput, '<<name');

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <img
        className="loginImg"
        src={user ? user.avatar_url : '/images/pexels-cottonbro-4569857.jpg'}
        alt="username"
        onError={(e) => {
          e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
        }}
      />
      <label htmlFor="username">USERNAME</label>
      <input
        type="text"
        name="username"
        id="username"
        required
        value={usernameInput}
        onChange={(e) => {
          setUsernameInput(e.target.value);
        }}
        onBlur={validateUserName}
        onFocus={resetErr}
      />
      {usernameErr ? <p>{usernameErr}</p> : null}
      <label htmlFor="name">NAME</label>
      <input
        type="password"
        name="name"
        id="name"
        required
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      {nameErr ? <p>{nameErr}</p> : null}
      <button className="loginBtn">Log In</button>
      <p>Don't have a username yet?</p>
      <Link to="/register">
        <button className="registerBtn">Register</button>
      </Link>
    </form>
  );
};

export default Login;
