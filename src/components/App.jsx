import { Component } from 'react';
import { Button } from './Button/Buttons';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
  };
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        React homework template
      </div>
    );
  }
}
