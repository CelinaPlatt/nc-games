import React from 'react';
import { useState } from 'react';
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
import { red } from '@mui/material/colors';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ariaLabel = { 'aria-label': 'description' };

export default function NewReview() {
  const [reviewImg, setReviewImg] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const { err, setErr } = useState(false);
  const { loading, setLoading } = useState(false);
  const { user } = useContext(UserContext);
  console.log(user, '<<user');


  console.log(reviewImg,"<<reviewIMg")
  console.log(reviewBody,"<<reviewBody")
  console.log(reviewTitle,"<<reviewTitle")
  const handlePost = async (e) => {
    console.log('submited');
    e.preventDefault();
    try {
    //   setLoading(true);
    //   const postedReviewFromApi = await postReview(
    //     user.username,
    //     reviewTitle,
    //     reviewBody,
    //     reviewImg
    //   );
    } catch (err) {
      setErr('Oops! Something went wrong.Try again');

      setTimeout(() => {
        setErr(false);
      }, 2500);
    }
  };

  return (
    <>
      <header className="profileHeader" />
      <div className="reviewList">
        <div className="reviewCard">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={
                reviewImg
                  ? reviewImg
                  : 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
              }
              alt={reviewTitle ? reviewTitle : 'reviewImg'}
            />
            <CardContent>
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
              <form className="newReviewFormContainer">
                <Input
                  className="formInput"
                  placeholder="Review Title"
                  inputProps={ariaLabel}
                  id="review-title"
                  value={reviewTitle}
                  onChange={(e) => {
                    setReviewTitle(e.target.value);
                  }}
                  style={{ margin: 20 }}
                />

                <TextareaAutosize
                  className="formInput"
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Write your review here..."
                  value={reviewBody}
                  onChange={(e) => {
                    setReviewBody(e.target.value);
                  }}

                  style={{ width: 200, margin: 20 }}
                />

                <Input
                  placeholder="Add review image (URL)"
                  inputProps={ariaLabel}
                  id="review-title"
                  value={reviewImg}
                  onChange={(e) => {
                    setReviewImg(e.target.value);
                  }}
                  style={{ margin: 20 }}
                />
              </form>
            </CardContent>

            <CardActions>
              <div className="postBtn">
                <Button onClick={handlePost}>
                  POST <SendIcon className="btnSpan" />
                </Button>
              </div>
            </CardActions>
          </Card>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
