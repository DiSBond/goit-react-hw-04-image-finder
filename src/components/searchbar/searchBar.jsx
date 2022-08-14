import React, { Component } from 'react';
import './searchBarStyled.css';

export default class SearchBar extends Component {
  state = {
    searchName: '',
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
      <div className="Searchbar">
        <header className="searchbar">
          <form className="SearchForm" onSubmit={this.searchSubmit}>
            <button type="submit" className="buttonSearch">
              <span className="SearchForm-button">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.addPictureName}
              value={this.state.searchName}
            />
          </form>
        </header>
      </div>
    );
  }
}
