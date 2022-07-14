import React, { Component } from 'react'
import SearchBar from './searchbar/searchBar'
import ImageGallery from './imageGallery/imageGallery'
import './appStyled.css'

export class App extends Component {
  state = {
    searchName: '',
    selectedImage: {},
  }

  search = name => {
    this.setState({searchName: name})
  }



  render() {
    return (
      <div className='App'>
        <SearchBar onSubmit={this.search}/>
        <ImageGallery searchName={this.state.searchName} openModal={this.openModal} selectedImage={this.updateSelectedImage}/>
      </div>
    )
  }
}

