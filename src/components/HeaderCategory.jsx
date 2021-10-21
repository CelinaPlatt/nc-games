import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useCategoryDesc from '../hooks/useCategoryDesc';

const HeaderCategory = () => {
  const { category } = useParams();
 
   const {categoryDesc,err,loading} =useCategoryDesc(category);
   
  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
  
      <header className="header">
        <h2>{category.replaceAll('-', ' ')}</h2>
        <p>{categoryDesc}</p>
      </header>
  
  );
};

export default HeaderCategory;
