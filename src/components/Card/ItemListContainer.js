import * as React from "react";
import { Card, Button, Col } from 'react-bootstrap';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import { Fragment } from 'react';




const ItemListContainer = () => {

  const [data, setData] = React.useState ([]);
  const [loading, setLoading] = React.useState (false);
  const [error, setError] = React.useState (null);

  React.useEffect(() => {
    const url =  "http://localhost:3001/products";

    setLoading(true);
    fetch(url)
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          throw respuesta;
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  
    

    return (
        <Fragment>
          {loading && <p>Cargando...</p>}
          {error && <p> ERROR </p>}
          {data?.map((productos) => {
          return <Col key={productos.id} className="box" sm="12" md="6" lg="4">
            <Card>
              <Card.Img variant="top"  src={productos.image} />
              <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text>
                <span> $ {productos.price} </span>
                </Card.Text>
                <ItemCount/>
                <Button className="Button" variant="primary">AGREGAR CARRITO</Button>
              </Card.Body>
            </Card>
            </Col>
            } )}
        </Fragment>

)
}
export default ItemListContainer;



