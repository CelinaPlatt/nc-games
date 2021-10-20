import '../styles/ReviewList.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getReviewById, getReviews, getReviewsByUser } from '../utils/Api';
import Review from './Review';

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
  }, [category, username, review_id]);

 

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <section className="reviewList">
      {reviews.map((review) => {
        return <Review review={review} />;
      })}
    </section>
  );
};

export default ReviewList;
