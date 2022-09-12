import propTypes from 'prop-types';
import { useState } from 'react';

import {
  SearchBarSt,
  SearchForm,
  SearchFormButton,
  ButtonSearch,
  SearchFormInput,
} from './searchBarSt';

const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const searchSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      alert('Строка запроса пуста');
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <SearchBarSt>
      <header>
        <SearchForm onSubmit={searchSubmit}>
          <ButtonSearch type="submit">
            <SearchFormButton>Search</SearchFormButton>
          </ButtonSearch>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={e =>
              setSearchName(e.currentTarget.value.toLocaleLowerCase())
            }
            value={searchName}
          />
        </SearchForm>
      </header>
    </SearchBarSt>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
