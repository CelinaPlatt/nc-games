import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useCategoryDesc from '../hooks/useCategoryDesc';

const HeaderCategory = () => {
  const { category } = useParams();

  const { categoryDesc, err, loading } = useCategoryDesc(category);

  if (loading) return <img className="loadingGif" src="/images/loading.gif" alt="Loading ..." />;
  if (err) return <p></p>;

  return (
    <header className="header">
      <h2>{category.replaceAll('-', ' ')}</h2>
      <p>{categoryDesc}</p>
    </header>
  );
};

export default HeaderCategory;
