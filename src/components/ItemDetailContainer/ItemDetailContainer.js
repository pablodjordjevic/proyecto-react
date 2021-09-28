import * as React from "react";
import { Fragment } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useParams } from "react-router";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  
  const [data, setData] = React.useState ([]);
  const [loading, setLoading] = React.useState (false);
  const [error, setError] = React.useState (null);
  const {id} = useParams() ;

  React.useEffect(() => {
    const url =  `http://localhost:3001/products?id=${id}`;

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
  }, [id]);

  return (

      
      <Fragment>
          {loading && <p>Cargando...</p>}
          {error && <p> ERROR </p>}
          {data?.map((productos) => {
            return  <div className="itemDetailContainer-container">
            <Col key={productos.id} className="box" sm="12" md="6" lg="4">
            
            <Card>
            <Card.Img variant="top" src={productos.image} /> 
            <Card.Body> 
              <Card.Title className="titleItemDetail">{productos.title}</Card.Title>
              <Card.Text className="detalleItemDetail">
                {productos.description}
              </Card.Text>
              <ItemCount stock={productos.stock} initial="0"/>
              <Button className="buttonItemDetail" variant="primary">COMPRAR</Button>
            </Card.Body>
          </Card>
          
          </Col>
          </div>
      } )} 
      </Fragment>


)}

export default ItemDetailContainer;