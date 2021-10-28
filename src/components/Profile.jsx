import '../styles/Profile.css';
import { FaEdit, FaRunning } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { useHistory, useParams } from 'react-router';
import { UsersContext } from '../contexts/Users';

const Profile = () => {
  const {username}=useParams();
  const { user, setUser } = useContext(UserContext);
  const {users,setUsers}=useContext(UsersContext);

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

  const userExists = users.some((userObj)=>{
    return  userObj.username === username;
  })

  if (!userExists) {
    return <p></p>
  }

  return (
    <header className="profileHeader">
      <section className="profileCard">
        <img
          src={user ? user.avatar_url : '/images/pexels-cottonbro-4569857.jpg'}
          alt={user.username}
          onError={(e) => {
            e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
          }}
        />

        <section className="profileCard_details">
          <p>{user.username}</p>
          <FaEdit className="editIcon" />
          <button>
            <FaRunning
              onClick={() => {
                handleLogOut();
              }}
            />
          </button>
        </section>
      </section>
    </header>
  );
};

export default Profile;
