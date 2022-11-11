import React, { Component } from 'react';

import Button from '../Button/Buttons';
import fetchImage from '../Fetch/Fetch';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';

import { Wrap } from './App.styled';

export default class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ status: 'pending' });

      fetchImage(inputValue, page)
        .then(resp => {
          const images = resp.hits;
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  };

  formSubmit = inputValue => {
    this.setState({ inputValue: inputValue, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status } = this.state;
    return (
      <Wrap>
        <Searchbar onSubmit={this.formSubmit} />
        {images && <ImageGallery data={images} />}
        {status === 'pending' && <Loader />}
        {images.length >= 12 && status === 'resolved' && (
          <Button onClick={this.loadMore} />
        )}
      </Wrap>
    );
  }
}
