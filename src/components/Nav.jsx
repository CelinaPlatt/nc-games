import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';

const Nav = ({ avatar, username }) => {
  return (
    <nav className="nav">
      <a href=" ">{<FaBars className="nav__barsIcom" />}</a>
      <section className="nav__barLinks hidden" >
        <a href="/category1">Category 1</a>
        <a href="/category2">Category 2</a>
        <a href="/category3">Category 3</a>
        <a href="/category4">Category 4</a>
      </section>
      <a href="/">HOME</a>
      <a href="/profile">
        <img className="nav__profileImg" src={avatar} alt={username} />
      </a>
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
