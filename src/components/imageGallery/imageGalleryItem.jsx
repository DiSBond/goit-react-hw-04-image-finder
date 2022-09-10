import { ItemCotainer, ItemImage } from './ImageGalleryItemSt';

const imageGalleryItem = ({ imageURL, imageId }) => {
  return (
    <ItemCotainer>
      <ItemImage
        className="ImageGalleryItem-image"
        src={imageURL}
        alt=""
        id={imageId}
      />
    </ItemCotainer>
  );
};

export default imageGalleryItem;
