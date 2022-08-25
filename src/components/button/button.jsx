import './buttonStyled.css';
// import propTypes from 'prop-types';

const ButtonLoadMore = ({ addNextPage }) => {
  return (
    <div className="ButtonContainer">
      <button className="Button" type="button" onClick={addNextPage}>
        Load More
      </button>
    </div>
  );
};

export default ButtonLoadMore;
