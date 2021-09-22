import * as React from "react";
import './HeroImage.css'
import { Fragment } from 'react';


const  HeroImage = (heroImgProps) => {
  return (
    <Fragment>
      <div className="heroImage" style={{backgroundImage:`url(${heroImgProps.imageback})`}}>
        <p className="heroText">{heroImgProps.text}</p>
      </div>
    </Fragment>
    )
    }
export default HeroImage;


