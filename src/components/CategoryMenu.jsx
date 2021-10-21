import '../styles/CategoryMenu.css';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

const CategoryMenu = ({ nav }) => {

  const { categories, err, loading } = useCategories();

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <section className={nav ? 'navBarMenu' : 'categoriesMenu'}>
      {categories.map((category) => {
        return (
          <Link key={category} to={`/${category}/reviews`}>
            {category.replaceAll('-', ' ')}
          </Link>
        );
      })}
    </section>
  );
};

export default CategoryMenu;
