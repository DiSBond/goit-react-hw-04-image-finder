import {TailSpin} from "react-loader-spinner";
import './loaderStyled.css'
import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <div className="loaderContainer">
        <p className="loaderText">Loading...</p>
        <TailSpin/>
      </div>
    )
  }
}
