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

export const getReviews = async (category) => {
  let params = {
    sort_by: 'created_at',
  };
  if (category) params.category = category;
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
  return data.comment;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get(`/users`);
  return data.users;
};

export const postComment = async (username, review_id, body) => {
  const { data } = await gamesApi.post(`reviews/${review_id}/comments`, {
    username: username,
    body: body,
  });
  return data.comment;
};

export const postUser = async (username, name, avatar_url) => {
  const { data } = await gamesApi.post(`/users`, {
    username: username,
    name: name,
    avatar_url: avatar_url,
  });
  return data.user;
};

export const deleteComment = async (comment_id) => {
  try {
    await gamesApi.delete(`/comments/${comment_id}`);
  } catch (err) {
    console.log('Oops! something went wrong when deleting');
  }
};
