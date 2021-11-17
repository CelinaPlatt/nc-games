import { useContext } from 'react';
import { useState } from 'react';
import { UsersContext } from '../contexts/Users';
import '../styles/Login.css';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { UserContext } from '../contexts/User';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Input } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const ariaLabel = { 'aria-label': 'description' };
const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const { users } = useContext(UsersContext);

  const history = useHistory();

  const validateUserName = () => {
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
      setUser(userMatched);
    } else {

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

  if (isLoginSuccessful) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    history.push(`/${user.username}/profile`);
  }

  return (
    <Card
      style={{ margin: '50px auto', textAlign: 'center' }}
      sx={{ maxWidth: 345 }}
    >
      <CardContent>
        <Avatar
          style={{ margin: '20px auto', width: 200, height: 200 }}
          sx={{ bgcolor: red[500] }}
          alt={user.username ? user.username : 'avatar'}
          src={user.avatar_url}
        />
        <form className="newReviewFormContainer">
          <Input
            className="formInput"
            placeholder="username"
            inputProps={ariaLabel}
            id="usernameInput"
            value={usernameInput}
            onChange={(e) => {
              setUsernameInput(e.target.value);
            }}
            style={{ margin: 20 }}
            onBlur={validateUserName}
            onFocus={resetUserNameErr}
          />
          {usernameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{usernameErr}</Alert>
            </Box>
          ) : null}
          <Input
            className="formInput"
            placeholder="name"
            inputProps={ariaLabel}
            type="password"
            id="nameInput"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            style={{ margin: 20 }}
            onFocus={resetNameErr}
          />
          {nameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{nameErr}</Alert>
            </Box>
          ) : null}
        </form>

        <Button
          variant="outlined"
          onClick={handleSubmit}
          style={{ margin: '20px 0' }}
        >
          Log in <LoginIcon className="btnSpan" />
        </Button>

        <p>Don't have a username yet?</p>

        <Button
          style={{ margin: '30px 0' }}
          variant="outlined"
          onClick={() => {
            history.push('/register');
          }}
        >
          Register <AssignmentIndIcon className="btnSpan" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Login;
