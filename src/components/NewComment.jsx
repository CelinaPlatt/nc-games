import React from 'react';
import { Redirect, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { postComment } from '../utils/Api';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const NewComment = ({ isOpen }) => {
  const { review_id } = useParams();

  const [newCommentInput, setNewCommentInput] = useState('');

  const [postedComments, setPostedComments] = useState([]);
  const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [isCommentFocus, setIsCommentFocus] = useState(false);

  const { user } = useContext(UserContext);

  console.log(newCommentInput, '<<<input');

  const handlePost = async (e) => {
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
        // setNewCommentInput('');
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
              <p className="commentAvatarP">{user.username}</p>
              <textarea
                className={newCommentInput === '' ? 'small-box' : 'large-box'}
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
          <button id="postBtn">POST</button>
        </section>
      </form>
      {postedComments.length !== 0
        ? postedComments.map((comment) => {
            return (
              <section className="commentCard commentFlexContainer">
                <img
                  className="commentAvatarImg"
                  src="user.avatar_url"
                  alt="user.username"
                  onError={(e) => {
                    e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
                  }}
                />
                <div className="commentBody">
                  <p className="commentAvatarP">{user.username}</p>
                  <p>{comment.body}</p>
                </div>
              </section>
            );
          })
        : null}
    </>
  );
};

export default NewComment;
