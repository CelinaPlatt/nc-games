import { useState } from 'react';
import { useEffect } from 'react';
import { getCategories } from '../utils/Api';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function fetchCategoryDesc() {
      try {
        setErr(null);
        setLoading(true);
        const categoriesFromApi = await getCategories();
        setCategories(categoriesFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchCategoryDesc();
  }, []);

  return { categories, err, loading };
};

export default useCategories;
