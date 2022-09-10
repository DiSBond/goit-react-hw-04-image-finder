import propTypes from 'prop-types';
import { LoadMoreButton, LoadMoreButtonContainer } from './buttonStyled.jsx';

const ButtonLoadMore = ({ addNextPage }) => {
  return (
    <LoadMoreButtonContainer>
      <LoadMoreButton type="button" onClick={addNextPage}>
        Load More
      </LoadMoreButton>
    </LoadMoreButtonContainer>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  addNextPage: propTypes.func.isRequired,
};
