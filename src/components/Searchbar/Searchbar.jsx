import { Component } from 'react';
import Notiflix from 'notiflix';

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
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.inputValue}
              onChange={this.handleChange}
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images"
            />

            <button type="submit">
              <span>Search</span>
            </button>
          </form>
        </header>
      </>
    );
  }
}

Notiflix.Notify.init({
  distance: '10px',
  timeout: 2000,
});
