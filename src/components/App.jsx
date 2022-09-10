import { useState, useEffect } from 'react';
import SearchBar from './searchbar/searchBar';
import ImageGallery from './imageGallery/imageGallery';
import ButtonLoadMore from 'components/button/button';

import AppStyledBox from './appStyled.jsx';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [selectedImage, setSelectedImage] = useState({});
  const [imageArray, setImageArray] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [modal, setModal] = useState(false);
  const [largeURL, setLargeUrl] = useState('');

  useEffect(() => {
    setImageArray([]);
  }, [searchName]);

  useEffect(() => {
    if (searchName !== '') {
      setStatus('pending');
      fetch(
        `https://pixabay.com/api/?q=${searchName}&page=${page}&key=25358610-6c58710bcb07b0c67b61215e4&image_type=photo&orientation=horizontal&per_page=12`
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

          setImageArray(imageArray => [...imageArray, ...filteredArray]);
          if (filteredArray.length === 0) {
            setStatus('rejected');
          } else {
            setStatus('resolved');
          }
        });
    }
  }, [searchName, page]);

  const search = name => {
    setSearchName(name);
    setPage(1);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = e => {
    if (e.target.id) {
      setModal(true);
      const selectedID = e.target.id;
      const selectedElement = imageArray.find(
        object => selectedID === `${object.id}`
      );
      const selectedURL = selectedElement.largeImageURL;
      setLargeUrl(selectedURL);
    }
  };

  const addNextPage = () => {
    setPage(page + 1);
    setStatus('pending');
  };

  return (
    <AppStyledBox>
      <SearchBar onSubmit={search} />
      <ImageGallery
        status={status}
        imageArray={imageArray}
        modal={modal}
        closeModal={closeModal}
        largeURL={largeURL}
        openModal={openModal}
        page={page}
      />
      {imageArray.length && (
        <ButtonLoadMore searchName={searchName} addNextPage={addNextPage} />
      )}
    </AppStyledBox>
  );
};
