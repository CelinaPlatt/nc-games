import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';

const HeaderUserReviews = () => {
  const { username } = useParams();

  return (
    <header className="header">
      <h2>{`Reviews by ${username}`}</h2>
    </header>
  );
};

export default HeaderUserReviews;
