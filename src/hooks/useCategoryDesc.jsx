
import { useState } from "react";
import { useEffect } from "react";
import { getCategoryDesc } from "../utils/Api";

const useCategoryDesc = (category) => {

    const [categoryDesc, setCategoryDesc] = useState('');
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function fetchCategoryDesc() {
      try {
        setErr(null);
        setLoading(true);
        const categoriesFromApi = await getCategoryDesc(category);
        setCategoryDesc(categoriesFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchCategoryDesc();
  }, [category]);

    return {categoryDesc,err,loading}
};

export default useCategoryDesc;