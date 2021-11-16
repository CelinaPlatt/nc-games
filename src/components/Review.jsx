import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Comments from './Comments';
import { trimReviewBody } from '../utils/DataManipulation';
import VoteCounter from './VoteCounter';
import { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Review = ({ review }) => {
  const { review_id } = useParams();
  const [expanded, setExpanded] = useState(true);
  const { user } = useContext(UserContext);
  const isUserOwner = user.username === review.owner;
  let isFullPageReview = false;

  if (review_id) {
    isFullPageReview = true;
  }

  const isCompleteReview = (reviewBody) => {
    return reviewBody.length === trimReviewBody(reviewBody).length;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="reviewCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={review.review_img_url}
            alt={review.title}
          />
          <CardContent>
            <Link
              style={{ color: 'black' }}
              className="linkToUserReviews"
              to={`/users/${review.owner}/reviews`}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    alt={review.owner}
                    src={review.avatar_url}
                  />
                }
                action={
                  isUserOwner && (
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  )
                }
                title={review.owner}
                subheader={review.created_at}
              />{' '}
            </Link>
            <Link
              style={{ color: 'black' }}
              to={`/reviews/${review.review_id}`}
            >
              <Typography gutterBottom variant="h5" component="div">
                {review.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {isFullPageReview || isCompleteReview(review.review_body)
                ? review.review_body
                : trimReviewBody(review.review_body) + ' ...'}
              <Link
                style={{ color: 'black' }}
                to={`/reviews/${review.review_id}`}
                className={
                  isFullPageReview || isCompleteReview(review.review_body)
                    ? 'hidden'
                    : 'viewMoreLink'
                }
              >
                view more
              </Link>
            </Typography>
          </CardContent>
          <CardActions>
            <VoteCounter votes={review.votes} review_id={review.review_id} />
            <Link
              to={`/reviews/${review.review_id}`}
            >
              <Button size="small">
                <FaCommentAlt />
                <span className="btnSpan">{review.comment_count} </span>
                {isFullPageReview && (
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                )}
              </Button>
            </Link>
          </CardActions>
          {isFullPageReview && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Comments
                  isFullPageReview={isFullPageReview}
                  isOpen={expanded}
                  review_id={review.review_id}
                  user={user}
                />
              </CardContent>
            </Collapse>
          )}
        </Card>
        {/* </Link> */}
      </div>
    </>
  );
};

export default Review;
