import '../styles/Profile.css';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useHistory } from 'react-router';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

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
            {/* EDIT PROFILE NAME OR AVATAR */}
            {/* <section className="button">
              <IconButton aria-label="settings">
                <EditIcon
                  onClick={() => {
                  //  change profile for edit form
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
