import { useEffect, useState } from 'react';
import { getCategories } from '../utils/Api';
import '../styles/CategoryMenu.css';
import { Link } from 'react-router-dom';

const CategoryMenu = ({nav}) => {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);



  useEffect(() => {
    async function fetchCategories() {
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
    fetchCategories();
  }, []);

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <section className={nav? "navBarMenu" : "categoriesMenu"}>
      {categories.map((category) => {
        return <Link key={category} to={`/reviews/${category}`}>{category.replaceAll('-',' ')}</Link>;
      })}
    </section>
  );
};

export default CategoryMenu;
