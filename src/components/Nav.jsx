import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';
import Expandable from './Expandable';
import { getDefaultNormalizer } from '@testing-library/react';

const Nav = ({ avatar, username }) => {
  return (
    <nav className="nav">
      {/* <a href=" ">
        {<FaBars className="nav__barsIcom" />} <CategoryMenu nav={true} />
      </a> */}
      <Expandable nav={true}>
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
