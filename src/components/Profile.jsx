import '../styles/Profile.css';
import { FaEdit } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { UsersContext } from '../contexts/Users';

const Profile = ({ user }) => {
  // const {username,name,avatar_url} = user;
  const { username } = useParams();
  // this.props.location.state.id
  // console.log(props,"<<props")

  // const {users}= useContext(UsersContext);

  // const user = users.filter((user)=>{
  //   return user.username === username;
  // })
  // console.log(user,'<<<user in profile')

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
