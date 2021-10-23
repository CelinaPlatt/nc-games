import { useEffect } from 'react';
import { useState } from 'react';
import { getReviewById } from '../utils/Api';

const useReviewById = (review_id) => {
  const [review, setReview] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchReviewById() {
      try {
        setErr(false);
        setLoading(true);
        const reviewsFromApi = await getReviewById(review_id);
        setReview(reviewsFromApi[0]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchReviewById();
  }, [review_id]);

  return { review, loading, err };
};

export default useReviewById;
