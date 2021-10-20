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
