import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Comments from './Comments';

import { trimReviewBody } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';

const Review = ({ review }) => {
  const { review_id } = useParams();
  const isFullPageReview = review_id;

  const isCompleteReview = (reviewBody) => {
    return reviewBody.length === trimReviewBody(reviewBody).length;
  };

  return (
    <section className="reviewCard">
      <img
        className="reviewImg"
        src={review.review_img_url}
        alt={review.title}
      />
      <section className="reviewCard__details">
        <Link className="linkToUserReviews" to={`/users/${review.owner}/reviews`}>
          <img
            className="reviewAvatarImg"
            src={review.avatar_url}
            alt={review.owner}
            onError={(e) => {
              e.target.src = "/images/pexels-jan-kopřiva-5800065.jpg"
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
      <VoteCounter votes={review.votes} review_id={review.review_id} />
      <section className="buttons">
    
        <Comments count={review.comment_count} reviewId={review.review_id} />
       
      </section>
    </section>
  );
};

export default Review;
