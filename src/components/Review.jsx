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
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
  },
});

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
  const [isOpen, setIsOpen] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const classes =useStyles();

  const { user } = useContext(UserContext);
  // console.log(isOpen, 'ISoPEN');
  // console.log(review_id, 'review_Id');
  let isFullPageReview = false;

  if (review_id) {
    isFullPageReview = true;
  }
  // console.log(review, '<<review');
  // console.log(isFullPageReview, '<<<fullpage');

  const isUserOwner = user.username === review.owner;

  const isCompleteReview = (reviewBody) => {
    return reviewBody.length === trimReviewBody(reviewBody).length;
  };

  const toggleIsOpen = () => {
    isFullPageReview && setIsOpen((isOpen) => !isOpen);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Link to={`/reviews/${review.review_id}`}>
        <Card className="review-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={review.review_img_url}
            // className="reviewImg"
            alt={review.title}
          />
          <CardContent>
            <Link
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
            <Typography gutterBottom variant="h5" component="div">
              {review.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {isFullPageReview || isCompleteReview(review.review_body)
                ? review.review_body
                : trimReviewBody(review.review_body) + ' ...'}
              <Link
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

            <Button className={classes.btn} size="small">
              <FaCommentAlt />
              <span>{review.comment_count} </span>
              {isFullPageReview && (
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  // aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              )}
            </Button>
          </CardActions>
          {isFullPageReview && (
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Comments
                  isFullPageReview={isFullPageReview}
                  isOpen={isOpen}
                  review_id={review.review_id}
                />
              </CardContent>
            </Collapse>
          )}
        </Card>
      </Link>
      {/* 
      <section className="reviewCard">
        <img
          className="reviewImg"
          src={review.review_img_url}
          alt={review.title}
        />
        <section className="reviewCard__details">
          <Link
            className="linkToUserReviews"
            to={`/users/${review.owner}/reviews`}
          >
            <img
              className="reviewAvatarImg"
              src={review.avatar_url}
              alt={review.owner}
              onError={(e) => {
                e.target.src = '/images/pexels-jan-kopřiva-5800065.jpg';
              }}
            />
            <p>{review.owner}</p>
          </Link>
          <section className="reviewCard__text">
            <p>{review.title}</p>
          </section>
          <p>
            {isFullPageReview || isCompleteReview(review.review_body)
              ? review.review_body
              : trimReviewBody(review.review_body) + ' ...'}
            <Link
              to={`/reviews/${review.review_id}`}
              className={
                isFullPageReview || isCompleteReview(review.review_body)
                  ? 'hidden'
                  : 'viewMoreLink'
              }
            >
              view more
            </Link>
          </p>
        </section>
        <section className="reviewButtons">
          {isFullPageReview ? (
            <button
              onClick={() => {
                toggleIsOpen();
              }}
            >
              <FaCommentAlt />
              <span className="commentCount">{review.comment_count} </span>
              {isOpen ? (
                <span className="labelHideComments">hide comments</span>
              ) : null}
            </button>
          ) : (
            <Link to={`/reviews/${review.review_id}`}>
            
              <FaCommentAlt />
              <span className="commentCount">{review.comment_count} </span>
          
            </Link>
          )}
          <VoteCounter votes={review.votes} review_id={review.review_id} />
        </section>
        {isFullPageReview && (
          <Comments
            isFullPageReview={isFullPageReview}
            isOpen={isOpen}
            review_id={review.review_id}
          />
        )}
      </section> */}
      
    </>
  );
};

export default Review;
