import { useEffect, useState } from 'react';

import { getCommentsByReviewId } from '../utils/Api';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/Comments.css';
import { UsersContext } from '../contexts/Users';
import { useContext } from 'react/cjs/react.development';
import { addUserAvatar } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';
import NewComment from './NewComment';

const Comments = ({ isOpen, review_id, isFullPageReview }) => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  const [comments, setComments] = useState([]);

  const { users } = useContext(UsersContext);

  const commentsWithAvatar = addUserAvatar(users, comments);

  useEffect(() => {
    async function fetchComments() {
      try {
        setErr(null);
        setLoading(true);
        const commentsFromApi = await getCommentsByReviewId(review_id);
        setComments(commentsFromApi);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr('Oops! Something went wrong');
      }
    }
    fetchComments();
  }, [review_id]);

  if (loading) return <p className="loadingMsg">Loading...</p>;
  if (err) return <p className="errMsg">{err}</p>;

  return (
    <div>
      {isOpen || isFullPageReview ?  (
        <>
          <NewComment isOpen={isOpen}/>
          <section className="commentsContainer">
            {commentsWithAvatar.map((comment) => {
              return (
                <section key={comment.comment_id} className="commentCard">
                  <div className="commentFlexContainer">
                    <img
                      className="commentAvatarImg"
                      src={comment.avatar_url}
                      alt={comment.author}
                      onError={(e) => {
                        e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
                      }}
                    />
                    <div className="commentBody">
                      <p className="commentAvatarP">{comment.author}</p>
                      <p>{comment.body}</p>
                      <button className="commentLikesBtn">
                        <VoteCounter
                          votes={comment.votes}
                          comment_id={comment.comment_id}
                        />
                      </button>
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Comments;
