import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer, LoaderText } from './loaderSt';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderText>Loading...</LoaderText>
      <TailSpin />
    </LoaderContainer>
  );
};

export default Loader;
