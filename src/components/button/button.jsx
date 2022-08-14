import React, { Component } from 'react';
import './buttonStyled.css';
import propTypes from 'prop-types';

export default class ButtonLoadMore extends Component {
  render() {
    return (
      <div className="ButtonContainer">
        <button
          className="Button"
          type="button"
          onClick={this.props.addNextPage}
        >
          Load More
        </button>
      </div>
    );
  }
}

ButtonLoadMore.propTypes = {
  addNextPage: propTypes.func,
};

// asd
