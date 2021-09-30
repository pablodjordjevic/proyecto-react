import { Fragment } from 'react';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from '../components/HeroImage/HeroImage';
import imgHeroHome from '../image/hero/hero.png'


function Home() {
  return(
    <Fragment>
    <HeroImage imageback={imgHeroHome} />
    
    </Fragment>
  )
}


export default Home;