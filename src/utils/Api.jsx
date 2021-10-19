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
