import * as React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from '../components/Categories/Categories';

import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { Container, Row } from 'react-bootstrap';

function Shop() {
  const [seleccionCategoria , setSeleccionCategoria] = React.useState(null);

  return(
    <Fragment>
  
      <Categories setSeleccionCategoria={setSeleccionCategoria} />
      <Container>
        <Row className="g-4">
          {/* PRODUCTOS CARDS */}
          <ItemListContainer seleccionCategoria={seleccionCategoria}/>
        </Row>
      </Container>
    </Fragment>
  )
}


export default Shop;