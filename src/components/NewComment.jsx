import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { postComment } from '../utils/Api';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

const NewComment = () => {
  const { review_id } = useParams();

  const [newCommentInput, setNewCommentInput] = useState('');

  const [commentBody, setCommentBody] = useState('');

  const [postedComment, setPostedComment] = useState({});
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(newCommentInput, '<<<input');

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      console.log(
        'jessjelly',
        review_id,
        commentBody,'<<<onsubmit'
      )
      setCommentBody(newCommentInput);
      setLoading(true);
      const postedCommentFromApi = await postComment(
        'jessjelly',
        review_id,
        commentBody
      );
      console.log(
        'jessjelly',
        review_id,
        commentBody,'<<<onsubmit'
      )
      setPostedComment(postedCommentFromApi);
      setLoading(false);
      setNewCommentInput('');
    } catch (err) {
      setErr('Oops! Something went wrong.Try again');

      setTimeout(() => {
        setErr(false);
      }, 2500);
    }
  };

  return (
    <form onSubmit={handlePost}>
      {err && (
        <Box sx={{ width: '100%' }}>
          <Alert severity="error">{err}</Alert>
        </Box>
      )}
      <section className="commentCard">
        <div className="commentFlexContainer">
          <img
            className="commentAvatarImg"
            src="user.avatar_url"
            alt="user.username"
            onError={(e) => {
              e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
            }}
          />
          <div className="commentBody">
            <p className="commentAvatarP">comment.author</p>
            <textarea
              type="text"
              name="commentBody"
              id="commentBody"
              maxLength="600"
              placeholder="Write a comment..."
              value={newCommentInput}
              onChange={(e) => {
                setNewCommentInput(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" id="postBtn">
          POST
        </button>
      </section>
    </form>
  );
};

export default NewComment;
