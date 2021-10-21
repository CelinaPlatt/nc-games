import { useState } from 'react';
import { useEffect } from 'react';
import { getCategories } from '../utils/Api';

const useCategoriesObj = (category) => {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function fetchCategoryDesc() {
      try {
        setErr(null);
        setLoading(true);
        const categoriesFromApi = await getCategories(category);
        setCategories(categoriesFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchCategoryDesc();
  }, [category]);

  return { categories, err, loading };
};

export default useCategoriesObj;
