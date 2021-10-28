// import { useContext } from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { UsersContext } from '../contexts/Users';
// import '../styles/Login.css';
// import { Redirect } from 'react-router';

// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';

const Register = () => {
  // const [usernameInput, setUsernameInput] = useState('');
  // const [nameInput, setNameInput] = useState('');
  // const [avatar, setAvatar] = useState('');
  // const [avatarInput, setAvatarInput] = useState('');
  // const [user, setUser] = useState('');
  // const [usernameErr, setUsernameErr] = useState('');
  // const [nameErr, setNameErr] = useState('');
  // const [loggedInUser, setLoggedInUser] = useState('');

  // const { users } = useContext(UsersContext);
  // console.log(users, 'users');

  // const validateUserName = () => {
  //   setUsernameErr('');
  //   const userMatch = users.filter((user) => {
  //     return usernameInput === user.username;
  //   });
  //   const userMatched = userMatch[0];
  //   if (userMatched) {
  //     setUser(userMatched);
  //   } else {
  //     setUsernameErr(`Oops that user isn't register with us yet`);
  //   }
  // };

  // const resetErr = () => {
  //   if (usernameErr) {
  //     setUsernameErr('');
  //   }
  //   if (nameErr) {
  //     setNameErr('');
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setNameErr('Oops! wrong username or name');
  //   setUser('');
  // };
  // setUsernameInput('');
  // setNameInput('');

  // console.log(loggedInUser, 'loggedinuser');
  // console.log(user, '<<<user');
  // console.log(usernameInput, '<<username');
  // console.log(nameInput, '<<name');

  // if (loggedInUser) {
  //   return <Redirect to="/profile" user={user} />;
  // }

  return (
    <div className="loginCard">
      <form className="loginForm">
        {/* <form className="loginForm" onSubmit={handleSubmit}> */}
        <img
          className="loginImg"
          // src={avatar ? avatar : '/images/pexels-cottonbro-4569857.jpg'}
          src="/images/pexels-cottonbro-4569857.jpg"
          alt="username"
          // onError={(e) => {
          //   e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
          // }}
        />
        <section className="inputsBlock">
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            maxLength="30"
            pattern="[abc]"
            // value={usernameInput}
            // onChange={(e) => {
            //   setUsernameInput(e.target.value);
            // }}
            // onBlur={validateUserName}
            // onFocus={resetErr}
          />
          {/* {usernameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{usernameErr}</Alert>
            </Box>
          ) : null} */}

          <label htmlFor="name">NAME</label>
          <input
          // type="password"
          // name="name"
          // id="name"
          // required
          // value={nameInput}
          // onChange={(e) => {
          //   setNameInput(e.target.value);
          // }}
          // onFocus={resetErr}
          />
          {/* {nameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{nameErr}</Alert>
            </Box>
          ) : null} */}

          <label htmlFor="avatar">AVATAR_URL</label>
          <input
          // type="url"
          // name="avatar"
          // id="avatar"
          // value={avatarInput}
          // onChange={(e) => {
          //   setAvatarInput(e.target.value);
          // }}
          // onFocus={resetErr}
          />
          {/* {nameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{nameErr}</Alert>
            </Box>
          ) : null} */}
        </section>

        <button className="registerBtn">
          {/* <button className="registerBtn" onClick={resetErr}> */}
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
