import { createContext, useState } from 'react';
import { getUsers } from '../utils/Api';
import { useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    name: '',
    avatar_url:
      '',
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
