import '../styles/Profile.css';
import { FaEdit } from 'react-icons/fa';

const Profile = ({ user }) => {

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
        </section>
      </section>
    </header>
  );
};

export default Profile;
