import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { patchCommentsVotes, patchReviewVotes } from '../utils/Api';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const VoteCounter = ({ votes, review_id, comment_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleVote = async () => {
    try {
      setIsError(false);
      setVotesChange((currVotesChange) => currVotesChange + 1);
      if (review_id) {
        await patchReviewVotes(review_id, 1);
      }
      if (comment_id) {
        await patchCommentsVotes(comment_id, 1);
      }
    } catch (err) {
      setIsError(true);
      setVotesChange((currVotesChange) => currVotesChange - 1);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <>
      <Button size="small" id="votesBtn" onClick={handleVote}>
        <FaRegHeart />{' '}
        <span className="btnSpan"> {Number(votes) + votesChange} </span>
      </Button>
      {isError ? (
        <Box sx={{ width: '100%' }}>
          <Alert severity="error">
            Oops! There's been an error.Try again later
          </Alert>
        </Box>
      ) : 
      null}
    </>
  );
};

export default VoteCounter;
