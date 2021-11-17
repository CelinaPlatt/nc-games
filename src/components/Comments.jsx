import { useEffect, useState } from 'react';
import { getCommentsByReviewId } from '../utils/Api';
import '../styles/Comments.css';
import { UsersContext } from '../contexts/Users';
import { useContext } from 'react';
import { addUserAvatar } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';
import NewComment from './NewComment';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Delete from '@mui/icons-material/Delete';
import { deleteComment } from '../utils/Api';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { SettingsEthernetRounded } from '@mui/icons-material';

const Comments = ({ isOpen, review_id, isFullPageReview, user }) => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);
  const [comments, setComments] = useState([]);
  const { users } = useContext(UsersContext);
  const commentsWithAvatar = addUserAvatar(users, comments);

  const history = useHistory();

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

  const handleDelete = async (comment_id) => {
    await deleteComment(comment_id);
    history.push(`/reviews/${review_id}`);
  };

  return (
    <div>
      {isOpen && (
        <>
          <NewComment isOpen={isOpen} />
          {commentsWithAvatar.map((comment) => {
            return (
              <>
                {err ? (
                  <Box sx={{ width: '100%' }}>
                    <Alert severity="error">{err}</Alert>
                  </Box>
                ) : null}
                <Card
                  key={comment.author}
                  className="review-card"
                  sx={{ maxWidth: 280 }}
                >
                  <Link
                    className="linkToUserReviews"
                    to={`/users/${comment.author}/reviews`}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ bgcolor: red[500] }}
                          alt={comment.author}
                          src={comment.avatar_url}
                        />
                      }
                      // >> Delete comment button
                      action={
                        user.username === comment.author && (
                          <IconButton
                            aria-label="settings"
                            onClick={() => {
                              handleDelete(comment.comment_id);
                            }}
                          >
                            <Delete />
                          </IconButton>
                        )
                      }
                      title={comment.author}
                      subheader={comment.body}
                    />
                  </Link>
                </Card>

                <div className="commentLikesBtn">
                  <VoteCounter
                    className
                    votes={comment.votes}
                    comment_id={comment.comment_id}
                  />
                </div>
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Comments;
