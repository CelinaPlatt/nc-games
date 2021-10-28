import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersContext } from '../contexts/Users';
import '../styles/Login.css';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { UserContext } from '../contexts/User';
import { useHistory } from 'react-router';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  // const [user, setUser] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const { users } = useContext(UsersContext);
  console.log(user, 'user in profile');

  const history = useHistory();

  const validateUserName = () => {
    console.log('im validating username');
    setUser({
      username: '',
      name: '',
      avatar_url: '',
    });
    setUsernameErr('');
    const userMatch = users.filter((user) => {
      return usernameInput === user.username;
    });
    const userMatched = userMatch[0];
    if (userMatched && userMatched.username) {
      console.log('im a match');
      setUser(userMatched);
    } else {
      console.log('im not a match');
      setUsernameErr(`Oops that user isn't register with us yet`);
    }
  };

  const resetUserNameErr = () => {
    if (usernameErr) {
      setUsernameErr('');
    }
  };

  const resetNameErr = () => {
    if (usernameErr) {
      setNameErr('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name === nameInput) {
      setIsLoginSuccessful(true);
    } else {
      setNameErr('Oops! wrong username or name');
      setUser({});
    }
    setUsernameInput('');
    setNameInput('');
  };

  console.log(isLoginSuccessful, 'isLoginSuccessful');
  // console.log(user, '<<<user');

  console.log(usernameInput, '<<username');
  console.log(nameInput, '<<name');

  console.log(user, '<user in login');
  console.log(usernameErr, 'username err');
  console.log(nameErr, 'username err');

  if (isLoginSuccessful) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    history.push(`/${user.username}/profile`);
  }

  return (
    <div className="loginCard">
      <form className="loginForm" onSubmit={handleSubmit}>
        <img
          className="loginImg"
          src={
            !user.username || usernameErr
              ? '/images/pexels-cottonbro-4569857.jpg'
              : user.avatar_url
          }
          alt="username"
          onError={(e) => {
            e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
          }}
        />
        <section className="inputsBlock">
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
            onFocus={resetUserNameErr}
          />
          {usernameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{usernameErr}</Alert>
            </Box>
          ) : null}
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
            onFocus={resetNameErr}
          />
          {nameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{nameErr}</Alert>
            </Box>
          ) : null}
        </section>
        <button className="loginBtn">Log In</button>
        <hr className="divisionLine" />
        <p>Don't have a username yet?</p>

        <Link to="/register">
          <button className="registerBtn">
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
