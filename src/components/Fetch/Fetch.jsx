export default function fetchImage(inputValue, page) {
  const PARAMS = `key=${process.env.REACT_APP_API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error());
  });
}
// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/?';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
// export const fetchImage = async (inputValue, page) => {
//   const response = await axios.get(
//     `key=${process.env.REACT_APP_API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//   );
//   return response.data;
// };
