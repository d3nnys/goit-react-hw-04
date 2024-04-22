import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'Db6U02-rF6j2Afjc7_PJMt-nY4PVAlhRjJ6uOPQ1Gwo';

const fetchImages = async (query, page) => {
  const {
    data: { results, total },
  } = await axios.get('/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: API_KEY,
      orientation: 'landscape',
    },
  });

  const normalizedImgs = results.map(
    ({ urls: { small, regular }, alt_description, id }, index) => ({
      urls: { small, regular },
      alt_description,
      id,
      mark: !index,
    })
  );

  return {
    results: normalizedImgs,
    total,
  };

  // return response.data;
};

export default fetchImages;
