import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useReviews from '../hooks/useReviews';

const HeaderFullPageReview = () => {
  const { review_id } = useParams();

  const { reviews } = useReviews(null, review_id);
  console.log(reviews[0], '<<<<reviews');

  return (
    <header className="header">
      <h2>{reviews[0].title}</h2>
      <p>{`Designer: ${reviews[0].designer}`}</p>
    </header>
  );
};

export default HeaderFullPageReview;
