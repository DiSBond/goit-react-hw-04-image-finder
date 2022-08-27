import ImageGalleryItem from './imageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'components/loader/loader';

import { RejectedContainer, ImageGalleryList } from './imageGallerySt';

import Modal from 'components/modal/modal';
import propTypes from 'prop-types';

const ImageGallery = ({
  searchName,
  imageArray,
  status,
  modal,
  closeModal,
  largeURL,
  openModal,
  page,
}) => {
  if (status === 'pending' && page === 1) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <RejectedContainer>
        Cant't find anything about {searchName}
      </RejectedContainer>
    );
  }

  if (imageArray.length > 0) {
    return (
      <div>
        <ImageGalleryList>
          {modal && (
            <Modal closeModal={closeModal}>
              <img src={largeURL} alt="" />
            </Modal>
          )}
          {imageArray.map(image => {
            return (
              <li key={image.id} onClick={openModal}>
                <ImageGalleryItem
                  imageURL={image.webformatURL}
                  imageId={image.id}
                />
              </li>
            );
          })}
          {status === 'pending' && <Loader />}
        </ImageGalleryList>
      </div>
    );
  }
};

export default ImageGallery;

ImageGallery.protoTypes = {
  status: propTypes.string.isRequired,
  imageArray: propTypes.arrayOf(propTypes.object).isRequired,
  modal: propTypes.string.isRequired,
  closeModal: propTypes.func.isRequired,
  largeURL: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};
