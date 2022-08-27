import React, { Component } from 'react';

import { ItemCotainer, ItemImage } from './ImageGalleryItemSt';

export default class imageGalleryItem extends Component {
  render() {
    return (
      <ItemCotainer>
        <ItemImage
          className="ImageGalleryItem-image"
          src={this.props.imageURL}
          alt=""
          id={this.props.imageId}
        />
      </ItemCotainer>
    );
  }
}
