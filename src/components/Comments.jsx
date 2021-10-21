import { useEffect, useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import { getCommentsByReviewId } from '../utils/Api';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/Comments.css';
import Avatar from './Avatar';

const Comments = ({ count, reviewId }) => {
  const { review_id } = useParams();
  const isFullPageReview = review_id;
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  const [comments, setComments] = useState([]);

  const toggleIsOpen = () => {
    isFullPageReview && setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        setErr(null);
        setLoading(true);
        const commentsFromApi = await getCommentsByReviewId(reviewId);
        setComments(commentsFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchComments();
  }, [reviewId]);

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <div>
      {isFullPageReview ? (
        <button onClick={toggleIsOpen}>
          <FaCommentAlt />
          <span className="commentCount">{count} </span>
          {isOpen && <span className="labelHideComments">hide comments</span>}
        </button>
      ) : (
        <Link to={`/reviews/${reviewId}`}>
          <button onClick={toggleIsOpen}>
            <FaCommentAlt />
            <span className="commentCount">{count} </span>
          </button>
        </Link>
      )}
      {isOpen && (
        <>
          <section className="commentsContainer">
            {comments.map((comment) => {
              return (
                <section key={comment.comment_id} className="commentCard">
                  <div className="commentFlexContainer">
                    <Avatar author={comment.author}/>
                    <p className="commentBody">{comment.body}</p>
                  </div>
                  <button className="commentLikesBtn">
                    <FaRegHeart />
                    {comment.votes}
                  </button>
                </section>
              );
            })}
          </section>
        </>
      )}
    </div>
  );
};

export default Comments;
