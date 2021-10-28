import { useEffect } from 'react';
import { useState } from 'react';
import { getReviewById, getReviews, getReviewsByUser } from '../utils/Api';

const useReviews = (username, review_id, category) => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setErr(false);
        setLoading(true);
        let reviewsFromApi = [];
        if (username) {
          reviewsFromApi = await getReviewsByUser(username);
        } else if (review_id) {
          reviewsFromApi = await getReviewById(review_id);
        } else if (category) {
          reviewsFromApi = await getReviews(category);
        } else {
          reviewsFromApi = await getReviews();
        }
        setReviews(reviewsFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchReviews();
  }, [username, review_id, category]);

  return { reviews, loading, err };
};

export default useReviews;
