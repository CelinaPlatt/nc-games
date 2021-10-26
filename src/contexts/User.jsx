import { createContext, useState } from 'react';
import { getUsers } from '../utils/Api';
import { useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    // username: 'jessjelly',
    // name: 'Jess Jelly',
    // avatar_url:
    //   'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg',
  });

  let isLoggedIn = false;

  console.log(user, '<<<user in App');

  useEffect(() => {
    const stringifiedPrevLoggedInUser = localStorage.getItem('loggedInUser');
    const prevLoggedInUser = JSON.parse(stringifiedPrevLoggedInUser);

    if (stringifiedPrevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
