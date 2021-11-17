import React from 'react';
import '../styles/Header.css';
import { useParams } from 'react-router';
import useReviewById from '../hooks/useReviewById';

const HeaderFullPageReview = () => {
  const { review_id } = useParams();

  const { review, loading, err } = useReviewById(review_id);

  if (loading) {
    return <p>Loading</p>;
  }
  if (err) {
    return <p></p>;
  }
  return (
    <header className="header">
      <h2>{review.title}</h2>
      <p>{`Designer: ${review.designer}`}</p>
    </header>
  );
};

export default HeaderFullPageReview;
