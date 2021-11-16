import '../styles/Profile.css';
import { FaEdit, FaRunning } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useHistory, useParams } from 'react-router';
import { UsersContext } from '../contexts/Users';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

const Profile = () => {
  const { username } = useParams();
  const { user, setUser } = useContext(UserContext);
  const { users, setUsers } = useContext(UsersContext);

  const history = useHistory();

  const handleLogOut = () => {
    setUser({
      username: '',
      name: '',
      avatar_url: '',
    });
    localStorage.removeItem('loggedInUser');
    history.push('/login');
  };

  const userExists = users.some((userObj) => {
    return userObj.username === username;
  });

  // if (!userExists) {
  //   return <p></p>
  // }

  return (
    <header className="profileHeader">
      <section className="profileCard">
        <section className="avatar">
          <Avatar
            sx={{ bgcolor: red[500], width: 120, height: 120 }}
            alt={user.username}
            src={user.avatar_url}
          />
        </section>
        <section className="profileCard_details">
          <h1>{user.username.toUpperCase()}</h1>
          <section className="flexContainer">
            {/* <section className="button">
              <IconButton aria-label="settings">
                <EditIcon
                  onClick={() => {
                    handleLogOut();
                  }}
                />
              </IconButton>
              <span className="rightMargin">Edit</span>
            </section> */}
            <section className="button">
              <IconButton aria-label="settings">
                <LogoutIcon
                  onClick={() => {
                    handleLogOut();
                  }}
                />
              </IconButton>
              <span className="rightMargin">Log out</span>
            </section>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Profile;
