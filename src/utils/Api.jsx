import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://game-critic.herokuapp.com/api/',
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');

  const categories = data.categories.map((category) => {
    return category.slug;
  });

  return categories;
};

export const getCategoryDesc = async (categorySlug) => {
  const { data } = await gamesApi.get('/categories');
  const category = data.categories.filter((category) => {
    return category.slug === categorySlug;
  });
  const categoryDesc = category[0].description;

  return categoryDesc;
};

export const getReviews = async (params) => {
  const { data } = await gamesApi.get('/reviews', {
    params: { ...params },
  });
  return data.reviews;
};

export const getReviewsByUser = async (username) => {
  const { data } = await gamesApi.get('/reviews');
  const userReviews = data.reviews.filter((review) => {
    return review.owner === username;
  });
  return userReviews;
};

export const getReviewById = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);
  return [data.review];
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const patchReviewVotes = async (review_id, vote) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: vote,
  });
  return data.review;
};

export const patchCommentsVotes = async (comment_id, vote) => {
  const { data } = await gamesApi.patch(`/comments/${comment_id}`, {
    inc_votes: vote,
  });
  console.log(data.comment, '<<comment');
  return data.comment;
};

export const getUsers = async () => {
  try {
    const { data } = await gamesApi.get(`/users`);
    return data.users;
  } catch (err) {
    console.log('Oops! Something went wrong');
  }
};

export const postComment = async (username, review_id, body) => {
  const { data } = await gamesApi.post(`reviews/${review_id}/comments`, {
    username: username,
    body: body,
  });
  console.log(data.comment, '<<comment');
  return data.comment;
};
