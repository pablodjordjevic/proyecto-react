import { Fragment } from 'react';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from '../components/Card/ItemListContainer';
import { Container, Row } from 'react-bootstrap';

function Shop() {
  return(
    <Fragment>
      <Container>
        <Row className="g-4">
          {/* PRODUCTOS CARDS */}
          <ItemListContainer/>
        </Row>
      </Container>
    </Fragment>
  )
}


export default Shop;