import { Component } from 'react';
import Notiflix from 'notiflix';
import {
  SearchBar,
  SearchButton,
  SearchForm,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { inputValue } = this.state;

    e.preventDefault();

    if (inputValue.trim() === '') {
      Notiflix.Notify.failure(`No request, try to write something realties =)`);
      return;
    }

    this.props.onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <>
        <SearchBar>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
              <BiSearchAlt size={25} />
              <SearchFormLabel>Search</SearchFormLabel>
            </SearchButton>

            <SearchFormInput
              value={this.state.inputValue}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images"
            />
          </SearchForm>
        </SearchBar>
      </>
    );
  }
}
