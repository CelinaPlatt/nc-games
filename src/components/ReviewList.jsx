import '../styles/ReviewList.css';
import { useParams } from 'react-router';
import Review from './Review';
import useReviews from '../hooks/useReviews';

const ReviewList = () => {
  const { category, username, review_id } = useParams();

  let params = {
    sort_by: 'created_at',
  };

  if (category) params.category = category;

  const { reviews, loading, err } = useReviews(username, review_id, params);

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
      <section className="reviewList">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </section>
  );
};

export default ReviewList;
