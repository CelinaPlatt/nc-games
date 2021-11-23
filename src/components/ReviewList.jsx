import '../styles/ReviewList.css';
import { useParams } from 'react-router';
import Review from './Review';
import useReviews from '../hooks/useReviews';
import { addUserAvatarToReviews } from '../utils/DataManipulation';
import { useContext } from 'react';
import { UsersContext } from '../contexts/Users';
import { UserContext } from '../contexts/User';

const ReviewList = () => {
  const { category, username, review_id } = useParams();
  const { users } = useContext(UsersContext);
  const { user } = useContext(UserContext);

  let params = {
    sort_by: 'created_at',
  };

  if (category) params.category = category;

  const { reviews, loading, err } = useReviews(username, review_id, category);
  const hasNoReviews = reviews.length === 0;

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

  if (loading) return <img className="loadingGif" src="/images/loading.gif" alt="Loading ..." />;

  if (err) {
    return <img className="errGif" src="/images/404-error.gif" alt={err} />;
  }

  return (
    <>
      <section className="reviewList">
        {hasNoReviews ? (
          <div className="noReviewsMsg">
            <p>Hello {user.username}</p>
            <p> You don't have any reviews yet </p>
          </div>
        ) : (
          reviewsWithAvatar.map((review) => {
            return <Review key={review.review_id} review={review} />;
          })
        )}
      </section>
    </>
  );
};

export default ReviewList;
