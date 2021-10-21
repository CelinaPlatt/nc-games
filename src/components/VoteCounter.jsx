import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { patchReviewVotes } from '../utils/Api';

const VoteCounter = ({ votes, review_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleVote = async () => {
    try {
      setIsError(false);
      setVotesChange((currVotesChange) => currVotesChange + 1);
      await patchReviewVotes(review_id, 1);
    } catch (err) {
      setIsError(true);
      setVotesChange((currVotesChange) => currVotesChange - 1);
    }
  };

  return (
    <>
      <button className="votesBtn" onClick={handleVote}>
        <FaRegHeart /> {Number(votes) + votesChange}
      </button>
      {isError ? <p>Woops! there was an error. Try again later</p> : null}
      {/* make error a pop up box */}
    </>
  );
};

export default VoteCounter;
