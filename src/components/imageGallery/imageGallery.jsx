import React, { Component } from 'react'
import ImageGalleryItem from './imageGalleryItem'
import ButtonLoadMore from 'components/button/button'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'components/loader/loader';
import Modal from 'components/modal/modal';
import './imageGalleryStyled.css';
import propTypes from 'prop-types'

export default class ImageGallery extends Component {
    state = {
        imageArray: [],
        page: 1,
        status: "idle",
        modal: false,
        largeURL: '',
    }

    componentDidUpdate(prevProps, prevState) {
 
        if (prevProps.searchName !== this.props.searchName || prevState.page !== this.state.page) {
            this.setState({status: 'pending'})
            if (prevProps.searchName !== this.props.searchName) {
                this.setState({imageArray: []})
            }
            
            fetch(`https://pixabay.com/api/?q=${this.props.searchName}&page=${this.state.page}&key=25358610-6c58710bcb07b0c67b61215e4&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => response.json()).catch(error => {console.log(error);}).then(resultArray => this.setState({imageArray: this.state.imageArray.concat(resultArray.hits)}))
            this.setState({status: 'resolved'})
            
            setTimeout(() => {
            if (!this.state.imageArray.length) {
                    this.setState({status: "rejected"})
                }
            }, 3000)

        }
    }

    addNextPage = () => {
        this.setState(prevState => (
            {page: prevState.page + 1,}
        ))
    }

    openModal = e => {

        if (e.target.id) {
            this.setState(({modal: true}))
            const selectedID = e.target.id;
            const selectedElement = this.state.imageArray.find(object => selectedID === `${object.id}`)
            const selectedURL = selectedElement.largeImageURL

            this.setState({largeURL: selectedURL})
        }
      }

    closeModal = () => {
        this.setState(({modal: false}))
      }


  render() {
    const {status, imageArray} = this.state;
    const {searchName} = this.props;

    if (status === 'pending') {
        return  <Loader/>
    }

    if (status === 'rejected') {
        return <div className='ContainerRejected'>Cant't find anything about {searchName}</div>
    }

    if (imageArray.length > 0) {
        return (
            <div>
                <ul className='ImageGallery'>
                    {this.state.modal && <Modal closeModal={this.closeModal}><img src={this.state.largeURL} alt='' /></Modal>}
                    {imageArray.map(image => {
                    return (
                        <li key={image.id} onClick={this.openModal}>
                            <ImageGalleryItem imageURL={image.webformatURL} imageId={image.id}/>
                        </li>
                    )
                    })}
                </ul>
                <ButtonLoadMore searchName={searchName} addNextPage={this.addNextPage}/>
            </div>
            )
    }
  }
}

ImageGallery.propTypes = {
    searchName: propTypes.string,
    }
    