import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Comments from './Comments';
import { FaRegHeart } from 'react-icons/fa';

const Review = ({ review }) => {
  const { review_id } = useParams();
  const isFullPageReview = review_id


  const trimDescription = (description) => {
    let charCount = 0;
    const descArr = description.split(' ');
    const trimmedArr = [];
    for (let word of descArr) {
      if (charCount < 100) {
        charCount = charCount + word.length;
        trimmedArr.push(word);
      }
    }
    let trimmedStr = trimmedArr.join(' ');

    return trimmedStr;
  };

  const isCompleteDesc = (description) => {
    return description.length === trimDescription(description).length;
  };

  return (
    <section className="reviewCard">
      <img src={review.review_img_url} alt={review.title} />
      <section className="reviewCard__details">
        <section className="reviewCard__text">
          {/* <img
                  className="reviewCard__avatar"
                  src={avatar}
                  alt={username}
                /> */}

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
        <button className="likesBttn">
          <FaRegHeart /> {review.votes}
        </button>
      </section>
    </section>
  );
};

export default Review;
