import React, { Component } from 'react';
import SearchBar from './searchbar/searchBar';
import ImageGallery from './imageGallery/imageGallery';
import ButtonLoadMore from 'components/button/button';

import './appStyled.css';

export class App extends Component {
  state = {
    searchName: '',
    selectedImage: {},
    imageArray: [],
    page: 1,
    status: 'idle',
    modal: false,
    largeURL: '',
  };

  search = name => {
    this.setState({ searchName: name });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      if (prevState.searchName !== this.state.searchName) {
        this.setState({ status: 'pending' });
      }

      if (prevState.searchName !== this.state.searchName) {
        this.setState({ imageArray: [], page: 1 });
      }

      fetch(
        `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.page}&key=25358610-6c58710bcb07b0c67b61215e4&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .catch(error => {
          console.log(error);
        })
        .then(resultArray => {
          const filteredArray = resultArray.hits.map(obj => {
            return {
              id: obj.id,
              largeImageURL: obj.largeImageURL,
              webformatURL: obj.webformatURL,
            };
          });
          this.setState({
            imageArray: this.state.imageArray.concat(filteredArray),
          });
        })
        .finally(() => {
          this.setState({ status: 'resolved' });
        });

      setTimeout(() => {
        if (!this.state.imageArray.length) {
          this.setState({ status: 'rejected' });
        }
      }, 3000);
    }
  }

  addNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = e => {
    if (e.target.id) {
      this.setState({ modal: true });
      const selectedID = e.target.id;
      const selectedElement = this.state.imageArray.find(
        object => selectedID === `${object.id}`
      );
      const selectedURL = selectedElement.largeImageURL;

      this.setState({ largeURL: selectedURL });
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { status, imageArray, modal, largeURL, searchName } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.search} />
        <ImageGallery
          status={status}
          imageArray={imageArray}
          modal={modal}
          closeModal={this.closeModal}
          largeURL={largeURL}
          openModal={this.openModal}
        />
        {imageArray.length && (
          <ButtonLoadMore
            searchName={searchName}
            addNextPage={this.addNextPage}
          />
        )}
      </div>
    );
  }
}
