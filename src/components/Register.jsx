import { useContext } from 'react';
import { useState } from 'react';
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
import { postUser } from '../utils/Api';

const ariaLabel = { 'aria-label': 'description' };

const Register = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [avatarInput, setAvatarInput] = useState('');
  const [usernameErr, setUsernameErr] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
  const [err, setErr] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const validateUserName = () => {
    const regex = /[^a-z0-9_.]/i;
    const hasInvalidChars = regex.test(usernameInput);
    const hasInvalidLength =
      usernameInput.length < 6 || usernameInput.length > 30;

    if (usernameInput) {
      if (hasInvalidLength) {
        setUsernameErr(`Oops! username must be between 6 and 30 characters`);
      } else if (usernameInput && hasInvalidChars) {
        setUsernameErr(`Oops!  no special characters other than '_' or '.' `);
      }
    }
  };

  const validateName = () => {
    const regex = /[^a-z\s]/i;
    const hasInvalidChars = regex.test(nameInput);
    const hasInvalidLength = nameInput.length < 6 || nameInput.length > 30;
    setUsernameErr('');

    if (nameInput) {
      if (hasInvalidLength) {
        setNameErr(`Oops! name must be between 6 and 30 characters`);
      } else if (nameInput && hasInvalidChars) {
        setNameErr(`Oops!  no numbers or special characters other than space `);
      }
    }
  };

  const resetUserNameErr = () => {
    if (usernameErr) {
      setUsernameErr('');
    }
  };

  const resetNameErr = () => {
    if (nameErr) {
      setNameErr('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      const postedUserFromApi = await postUser(
        usernameInput,
        nameInput,
        avatarInput
      );
      setUser(postedUserFromApi);
      setIsRegisterSuccessful(true);
    } catch (err) {
      setErr('Oops! Something went wrong.Try again');

      setTimeout(() => {
        setErr(false);
      }, 2500);
    }
  };

  if (isRegisterSuccessful) {
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
          alt={usernameInput ? usernameInput : 'avatar'}
          src={avatarInput}
        />
         {err && (
                <Box sx={{ width: '100%' }}>
                  <Alert severity="error">{err}</Alert>
                </Box>
              )}
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
            id="nameInput"
            value={nameInput}
            onChange={(e) => {
              setNameInput(e.target.value);
            }}
            style={{ margin: 20 }}
            onBlur={validateName}
            onFocus={resetNameErr}
          />
          {nameErr ? (
            <Box sx={{ width: '100%' }}>
              <Alert severity="error">{nameErr}</Alert>
            </Box>
          ) : null}

          <Input
            className="formInput"
            placeholder="avatarUrl"
            inputProps={ariaLabel}
            id="avatarUrl"
            value={avatarInput}
            onChange={(e) => {
              setAvatarInput(e.target.value);
            }}
            style={{ margin: 20 }}
          />
        </form>

        <Button
          style={{ margin: '30px 0' }}
          variant="outlined"
          onClick={handleSubmit}
        >
          Register <AssignmentIndIcon className="btnSpan" />
        </Button>

        <p>Already registered?</p>

        <Button
          variant="outlined"
          onClick={() => {
            history.push('/login');
          }}
          style={{ margin: '20px 0' }}
        >
          Log in <LoginIcon className="btnSpan" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Register;
