import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import CategoryMenu from './CategoryMenu';

const Nav = ({ avatar, username }) => {
  return (
    <nav className="nav">
      <a href=" ">{<FaBars className="nav__barsIcom" />}</a>
      <CategoryMenu nav={true} />
      <Link to="/">HOME</Link>
      <Link to="/profile">
        <img className="nav__profileImg" src={avatar} alt={username} />
      </Link>
    </nav>
  );
};

export default Nav;

/* <script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script> */

/* <div class="topnav">
  <a href="#home" class="active">Logo</a>
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div> */
