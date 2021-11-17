import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import Expandable from './Expandable';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const Nav = () => {
  const { user } = useContext(UserContext);
  const avatar = user.avatar_url;
  const username = user.username;
  
  return (
    <nav className="nav">
      <Link id='homeLink' to="/">HOME</Link>
      
      <Link to={!username ? '/login':`/${username}/profile` }>
      <Avatar
            sx={{ bgcolor: red[500], width: 50, height: 50 }}
            alt={username}
            src={avatar}
          />
      </Link>
    </nav>
  );
};

export default Nav;
