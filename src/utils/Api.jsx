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
