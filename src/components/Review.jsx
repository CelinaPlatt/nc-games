import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Comments from './Comments';

import { trimDescription } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';

const Review = ({ review }) => {
  const { review_id } = useParams();
  const isFullPageReview = review_id;

  const isCompleteDesc = (description) => {
    return description.length === trimDescription(description).length;
  };

  return (
    <section className="reviewCard">
      <img src={review.review_img_url} alt={review.title} />
      <section className="reviewCard__details">
        <section className="reviewCard__text">
          <Link to={`/users/${review.owner}/reviews`}>
            <p>{review.owner}</p>
          </Link>

          <p>{review.title}</p>
        </section>
        <p>
          {isFullPageReview || isCompleteDesc(review.review_body)
            ? review.review_body
            : trimDescription(review.review_body) + ' ...'}
          <Link
            to={`/reviews/${review.review_id}`}
            className={
              isFullPageReview || isCompleteDesc(review.review_body)
                ? 'hidden'
                : 'viewMoreLink'
            }
          >
            view more
          </Link>
        </p>
      </section>
      <section className="buttons">
        <Comments count={review.comment_count} reviewId={review.review_id} />
        <VoteCounter votes={review.votes} review_id={review.review_id} />
      </section>
    </section>
  );
};

export default Review;
