import '../styles/ReviewList.css';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getReviewById, getReviews, getReviewsByUser } from '../utils/Api';
import { Link } from 'react-router-dom';
import Comments from './Comments';

const ReviewList = () => {
  const { category, username, review_id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);
  let params = {
    sort_by: 'created_at',
  };

  if (category) params.category = category;

  useEffect(() => {
    async function fetchReviews() {
      try {
        setErr(null);
        setLoading(true);
        let reviewsFromApi = [];
        if (username) {
          reviewsFromApi = await getReviewsByUser(username);
        } else if (review_id) {
          reviewsFromApi = await getReviewById(review_id);
        } else {
          reviewsFromApi = await getReviews(params);
        }
        setReviews(reviewsFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchReviews();
  }, [category, username,review_id]);

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

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <section className="reviewList">
      {reviews.map((review) => {
        return (
          <div key={review.review_id} className="reviewCard">
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
                {review_id || isCompleteDesc(review.review_body)
                  ? review.review_body
                  : trimDescription(review.review_body) + ' ...'}
                <Link
                  to={`/reviews/${review.review_id}`}
                  className={
                    review_id || isCompleteDesc(review.review_body)
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
          </div>
        );
      })}
    </section>
  );
};

export default ReviewList;
