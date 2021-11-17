import '../styles/ReviewList.css';
import { useParams } from 'react-router';
import Review from './Review';
import useReviews from '../hooks/useReviews';
import { addUserAvatarToReviews } from '../utils/DataManipulation';
import { useContext } from 'react';
import { UsersContext } from '../contexts/Users';

const ReviewList = () => {
  const { category, username, review_id } = useParams();
  const { users } = useContext(UsersContext);

  let params = {
    sort_by: 'created_at',
  };

  if (category) params.category = category;

  const { reviews, loading, err } = useReviews(username, review_id, category);

  const reviewsWithAvatar = addUserAvatarToReviews(users, reviews);

  if (username) {
    const userExists = users.some((userObj) => {
      return userObj.username === username;
    });

    if (!userExists) {
      return (
        <img className="errGif" src="/images/404-error.gif" alt="Not Found" />
      );
    }
  }

  if (loading) return <p className="loadingMsg">Loading...</p>;

  if (err)
    return <img className="errGif" src="/images/404-error.gif" alt={err} />;

  return (
    <section className="reviewList">
      {reviewsWithAvatar.map((review) => {
        return <Review key={review.review_id} review={review} />;
      })}
    </section>
  );
};

export default ReviewList;
