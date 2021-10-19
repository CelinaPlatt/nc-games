import '../styles/ReviewList.css';
import { FaRegHeart, FaCommentAlt } from 'react-icons/fa';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getReviews, getReviewsByUser } from '../utils/Api';

const ReviewList = () => {
  const { category, username } = useParams();

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
        if(username) {
          reviewsFromApi = await getReviewsByUser(username);
        } else{
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
  }, [category]);

  const data = reviews.map((review)=>{
    return review.owner;
  })
  console.log(data,'owners')


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
                <p>{review.owner}</p>
                <p>{review.title}</p>
              </section>
              <p>{review.review_body}</p>
            </section>
            <section className="buttons">
              <button className="likesBttn">
                <FaCommentAlt /> {review.comment_count}
              </button>
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
