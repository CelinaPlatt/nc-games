import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Comments from './Comments';

import { trimReviewBody } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';
import { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';

const Review = ({ review }) => {
  const { review_id } = useParams();
  const [isOpen, setIsOpen] = useState(true);
console.log(isOpen,'ISoPEN')
console.log(review_id,'review_Id')
  let isFullPageReview = false;

  if (review_id) {
    isFullPageReview = true;
  }

  console.log(isFullPageReview, '<<<fullpage');

  const isCompleteReview = (reviewBody) => {
    return reviewBody.length === trimReviewBody(reviewBody).length;
  };

  const toggleIsOpen = () => {
    isFullPageReview && setIsOpen((isOpen) => !isOpen);
  };

  return (
    <section className="reviewCard">
      <img
        className="reviewImg"
        src={review.review_img_url}
        alt={review.title}
      />
      <section className="reviewCard__details">
        <Link
          className="linkToUserReviews"
          to={`/users/${review.owner}/reviews`}
        >
          <img
            className="reviewAvatarImg"
            src={review.avatar_url}
            alt={review.owner}
            onError={(e) => {
              e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
            }}
          />
          <p>{review.owner}</p>
        </Link>
        <section className="reviewCard__text">
          <p>{review.title}</p>
        </section>
        <p>
          {isFullPageReview || isCompleteReview(review.review_body)
            ? review.review_body
            : trimReviewBody(review.review_body) + ' ...'}
          <Link
            to={`/reviews/${review.review_id}`}
            className={
              isFullPageReview || isCompleteReview(review.review_body)
                ? 'hidden'
                : 'viewMoreLink'
            }
          >
            view more
          </Link>
        </p>
      </section>
      <section className="reviewButtons">
        {isFullPageReview ? (
          <button onClick={()=>{toggleIsOpen()}}>
            <FaCommentAlt />
            <span className="commentCount">{review.comment_count} </span>
            {isOpen ?<span className="labelHideComments">hide comments</span> : null}
          </button>
        ) : (
          <Link to={`/reviews/${review.review_id}`}>
            {/* <button onClick={toggleIsOpen}> */}
              <FaCommentAlt />
              <span className="commentCount">{review.comment_count} </span>
            {/* </button> */}
          </Link>
        )}
        <VoteCounter votes={review.votes} review_id={review.review_id} />
      </section>
{isFullPageReview && <Comments isFullPageReview={isFullPageReview} isOpen={isOpen} review_id={review.review_id} /> }
      
    </section>
  );
};

export default Review;
