import { useState, useEffect } from 'react';

import Button from '../Button/Buttons';
import fetchImage from '../Fetch/Fetch';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { Wrap } from './App.styled';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (inputValue && page) {
      setStatus('pending');

      fetchImage(inputValue, page)
        .then(resp => {
          const images = resp.hits;
          setImages(prevState => [...prevState, ...images]);
          setStatus('resolved');
        })
        .catch(error => {
          console.log(error);
          setStatus('rejected');
        });
    }
  }, [inputValue, page]);

  const formSubmit = inputValue => {
    setInputValue(inputValue);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Wrap>
      <Searchbar onSubmit={formSubmit} />
      {images && <ImageGallery data={images} />}
      {status === 'pending' && <Loader />}
      {images.length >= 12 && status === 'resolved' && (
        <Button onClick={loadMore} />
      )}
    </Wrap>
  );
};

export default App;
