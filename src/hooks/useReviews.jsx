import { useEffect } from "react";
import { useState } from "react";
import { getReviewById, getReviews, getReviewsByUser } from "../utils/Api";

const useReviews = (username,review_id,params) => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

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
  }, [username, review_id]);

  return {reviews,loading,err};
};

export default useReviews;
