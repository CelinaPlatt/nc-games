import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCategoryDesc } from '../utils/Api';

const Header = () => {
  const { category } = useParams();
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

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <header className="header">
      <h2>{category.replaceAll('-', ' ')}</h2>
      <p>{categoryDesc}</p>
    </header>
  );
};

export default Header;
