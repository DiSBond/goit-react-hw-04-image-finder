import { TailSpin } from 'react-loader-spinner';

import React, { Component } from 'react';

import { LoaderContainer, LoaderText } from './loaderSt';

export default class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <LoaderText>Loading...</LoaderText>
        <TailSpin />
      </LoaderContainer>
    );
  }
}
