import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useCategoryDesc from '../hooks/useCategoryDesc';

const Header = () => {
  const { category ,username} = useParams();
  console.log(category,"<<<category");
  // if Params.category
   const {categoryDesc,err,loading} =useCategoryDesc(category);
  //  if Params.review_id
  //  const review.title, review.designer = useReview (review(id))
//  if Params.username
//  const  user.avatar_url
   
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
