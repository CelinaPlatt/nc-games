import { createContext, useState } from 'react';
import { getUsers } from '../utils/Api';
import { useEffect } from 'react';

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
//   const [err,setErr] = useState(false;)

  useEffect(() => {
    async function fetchUsers() {
      try {
        //   setLoadingUsers(true);
        const usersFromApi = await getUsers();
        setUsers(usersFromApi);
        //   setLoadingUsers(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
