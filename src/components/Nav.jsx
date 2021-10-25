import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import Expandable from './Expandable';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Nav = () => {
  const { user } = useContext(UserContext);
  const avatar = user.avatar_url;
  const username = user.username;
  
  return (
    <nav className="nav">
      <Expandable>
        <CategoryMenu nav={true} />
      </Expandable>
      <Link to="/">HOME</Link>
      <Link to={`/${username}/profile`}>
        <img
          className="nav__profileImg"
          src={avatar ? avatar : '/images/pexels-cottonbro-4569857.jpg'}
          alt={username}
          onError={(e) => {
            e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
          }}
        />
      </Link>
    </nav>
  );
};

export default Nav;
