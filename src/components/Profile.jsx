import '../styles/Profile.css';
import { FaEdit, FaRunning } from 'react-icons/fa';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  if (user === {}) {
    return <Redirect to={'/login'} />;
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
            <FaRunning />
          </button>
        </section>
      </section>
    </header>
  );
};

export default Profile;
