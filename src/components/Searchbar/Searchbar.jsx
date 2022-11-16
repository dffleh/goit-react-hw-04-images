import { useState } from 'react';
import Notiflix from 'notiflix';

import { BiSearchAlt } from 'react-icons/bi';

import {
  SearchBar,
  SearchButton,
  SearchForm,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      Notiflix.Notify.failure(
        `No name - no images. Please, input your request!`
      );
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchButton type="submit">
            <BiSearchAlt size={25} />
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchButton>

          <SearchFormInput
            value={inputValue}
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
          />
        </SearchForm>
      </SearchBar>
    </>
  );
};

export default Searchbar;
