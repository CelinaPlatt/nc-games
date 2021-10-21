// import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';
// import useUsers from '../hooks/useUsers';
import '../styles/Avatar.css';

const Avatar = ({ author }) => {
//   const { users, loadingUsers } = useUsers();
//   const [loading, setLoading] = useState(false);
//   const [avatar, setAvatar] = useState('');

//   console.log(users,"<<users")
//   console.log(loadingUsers,'<<avatar')

//   if (loadingUsers) {
//     setLoading(true);
    
//   } else {
    // const userAuthor = users.filter((user) => {
    //   return user.username === author;
    // });

    // const authorAvatar = userAuthor.avatar_url;
    // setAvatar(authorAvatar);




  return (
    <>
      {/* {loading ? ( */}
        <img
          className="avatarImg"
          src="/images/pexels-raka-miftah-4253487.jpg"
          alt={author}
        />
      {/* ) : (
        <img src={author} alt={author} />
      )} */}
    </>
  );
};

export default Avatar;
