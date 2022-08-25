import ImageGalleryItem from './imageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'components/loader/loader';

import Modal from 'components/modal/modal';
import './imageGalleryStyled.css';
import propTypes from 'prop-types';

const ImageGallery = ({
  searchName,
  imageArray,
  status,
  modal,
  closeModal,
  largeURL,
  openModal,
}) => {
  if (status === 'pending') {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <div className="ContainerRejected">
        Cant't find anything about {searchName}
      </div>
    );
  }

  if (imageArray.length > 0) {
    return (
      <div>
        <ul className="ImageGallery">
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
        </ul>
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
