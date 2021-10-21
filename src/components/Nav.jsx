import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import Expandable from './Expandable';

const Nav = ({ avatar, username }) => {
  return (
    <nav className="nav">
      <Expandable>
        <CategoryMenu nav={true} />
      </Expandable>
      <Link to="/">HOME</Link>
      <Link to={`/${username}/profile`}>
        <img className="nav__profileImg" src={avatar} alt={username} />
      </Link>
    </nav>
  );
};

export default Nav;
