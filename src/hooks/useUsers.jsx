import { useState, useEffect } from 'react';
import { getUsers } from '../utils/Api';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoadingUsers(true);
      const usersFromApi = await getUsers();
      setUsers(usersFromApi);
      setLoadingUsers(false);
    }
    fetchUsers();
  }, []);

  console.log(users, '<<users');

  return { users, setUsers, loadingUsers };
};

export default useUsers;
