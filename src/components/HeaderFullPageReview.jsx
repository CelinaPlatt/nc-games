import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useReviewById from '../hooks/useReviewById';

const HeaderFullPageReview = () => {
  const { review_id } = useParams();

  const { review } = useReviewById(review_id);
  console.log(review, '<<<<review');

  return (
    <header className="header">
      <h2>{review.title}</h2>
      <p>{`Designer: ${review.designer}`}</p>
    </header>
  );
};

export default HeaderFullPageReview;
