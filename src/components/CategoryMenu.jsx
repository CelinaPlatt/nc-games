import '../styles/CategoryMenu.css';
import { Link } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CategoryMenu = ({ nav }) => {
  const { categories, err, loading } = useCategories();

  if (loading)
    return  <img className="loadingGif" src="/images/loading.gif" alt="Loading ..." />;

  if (err) return <p className="errMsg">{err}</p>;

  return (
    <section className={nav ? 'navBarMenu' : 'categoriesMenu'}>
      <ArrowForwardIosIcon
        sx={{ fontSize: 40 }}
        style={{
          zIndex: '-1',
          color: '#ba9468',
          width: '100vw',
          transform: 'rotate(-90deg)',
        }}
      />

      {categories.map((category) => {
        return (
          <Link className="linkItem" key={category} to={`/${category}/reviews`}>
            {category.replaceAll('-', ' ').toUpperCase()}
          </Link>
        );
      })}
      <ArrowForwardIosIcon
        sx={{ fontSize: 40 }}
        style={{
          zIndex: '-1',
          color: '#ba9468',
          width: '100vw',
          transform: 'rotate(90deg)',
        }}
      />
    </section>
  );
};

export default CategoryMenu;
