import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { postComment } from '../utils/Api';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import VoteCounter from './VoteCounter';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// import TextField from '@mui/material/TextField';

const ariaLabel = { 'aria-label': 'description' };

const NewComment = ({ isOpen }) => {
  const { review_id } = useParams();

  const [newCommentInput, setNewCommentInput] = useState('');
  const [postedComments, setPostedComments] = useState([]);
  const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [isCommentFocus, setIsCommentFocus] = useState(false);

  const { user } = useContext(UserContext);

  console.log(newCommentInput, '<<<input');
  console.log(postedComments, 'postedComments');

  const handlePost = async (e) => {
    console.log('submited');
    e.preventDefault();
    if (newCommentInput) {
      try {
        // setLoading(true);
        const postedCommentFromApi = await postComment(
          user.username,
          review_id,
          newCommentInput
        );
        setPostedComments([...postedComments, postedCommentFromApi]);
        // setLoading(false);
        setNewCommentInput('');
      } catch (err) {
        setErr('Oops! Something went wrong.Try again');

        setTimeout(() => {
          setErr(false);
        }, 2500);
      }
    }
  };

  if (!user.username) {
    return <Redirect to={'/login'} />;
  }
  return (
    <>
      <div className="newCommentCard">
        <Card className="review-card" sx={{ maxWidth: 280 }}>
          <Link
            className="linkToUserReviews"
            to={`/users/${user.username}/reviews`}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  alt={user.username}
                  src={user.avatar_url}
                />
              }
              title={user.username}
            />
          </Link>
          <CardContent>
            <form onSubmit={handlePost}>
              {err && (
                <Box sx={{ width: '100%' }}>
                  <Alert severity="error">{err}</Alert>
                </Box>
              )}
              <Input
                placeholder="Write a comment"
                inputProps={ariaLabel}
                id="commentBody"
                value={newCommentInput}
                onChange={(e) => {
                  setNewCommentInput(e.target.value);
                }}
              />
              <div className="postBtn">
                <Button onClick={handlePost}>
                  POST <SendIcon className="btnSpan" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {postedComments.length !== 0
        ? postedComments.map((comment) => {
            return (
              <>
                <Card
                  key={comment.comment_id}
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
                      action={
                        user.username === comment.author && (
                          <IconButton aria-label="settings">
                            <DeleteIcon />
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
          })
        : null}
    </>
  );
};

export default NewComment;
