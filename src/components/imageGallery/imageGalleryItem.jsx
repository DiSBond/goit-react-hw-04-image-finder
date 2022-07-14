import React, { Component } from 'react'
import './imageGalleryStyled.css'

export default class imageGalleryItem extends Component {
  render() {
    return (
        <div className="ImageGalleryItem">
            <img className='ImageGalleryItem-image' src={this.props.imageURL} alt="" id={this.props.imageId} />
        </div>
    )
  }
}
