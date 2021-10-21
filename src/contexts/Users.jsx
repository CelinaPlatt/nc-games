import { createContext, useState } from 'react';
import { getUsers } from '../utils/Api';
import { useEffect } from 'react';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
    //   setLoadingUsers(true);
      const usersFromApi = await getUsers();
      setUsers(usersFromApi);
    //   setLoadingUsers(false);
    }
    fetchUsers();
  }, []);
  
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
