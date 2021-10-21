import '../styles/Profile.css';
import { FaEdit } from 'react-icons/fa';

const Profile = ({user}) => {
    const {username,name,avatar_url} = user;
  return (
    <section className="profileCard">
      <img src={avatar_url} alt={username} />
      <section className="profileCard_details">
        <p>{username}</p>
        <p>{name}</p> 
        <FaEdit className="editIcon"/>
      </section>
    </section>
  );
};

export default Profile;
