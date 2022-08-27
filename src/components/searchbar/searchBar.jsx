import React, { Component } from 'react';
import propTypes from 'prop-types';

import {
  SearchBarSt,
  SearchForm,
  SearchFormButton,
  ButtonSearch,
  SearchFormInput,
} from './searchBarSt';

export default class SearchBar extends Component {
  state = {
    searchName: '',
  };

  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  addPictureName = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  searchSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      alert('Строка запроса пуста');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchBarSt>
        <header>
          <SearchForm onSubmit={this.searchSubmit}>
            <ButtonSearch type="submit">
              <SearchFormButton>Search</SearchFormButton>
            </ButtonSearch>

            <SearchFormInput
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.addPictureName}
              value={this.state.searchName}
            />
          </SearchForm>
        </header>
      </SearchBarSt>
    );
  }
}
