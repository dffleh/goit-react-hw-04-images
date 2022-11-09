import axios from 'axios';
import { Component } from 'react';
import { Button } from './Button/Buttons';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';

axios.defaults.baseURL=`https://pixabay.com/api/key=${process.env.REACT_APP_API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

axios.defaults.headers.common['x-api-key']= process.env.REACT_APP_API_KEY;

export default class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
  };

  async componentDidMount(){
    try {
      const response= await axios.get('/totalHits	')
      console.log(response);
    } catch (error) {
      
    }
  }

  formSubmit = inputValue => {
    this.setState({ inputValue: inputValue, images: [], page: 1 });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit}/>
        <ImageGallery />
        <Loader />
        <Button />
        React homework template
      </div>
    );
  }
}
