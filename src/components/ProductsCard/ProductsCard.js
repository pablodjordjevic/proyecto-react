import * as React from "react";
import { Card, Button, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";



const ProductsCard = ({seleccionCategoria}) => {

  const [data, setData] = React.useState ([]);
  const [loading, setLoading] = React.useState (false);
  const [error, setError] = React.useState (null);

  React.useEffect(() => {
    const url = seleccionCategoria ? `http://localhost:3001/products?categoria=${seleccionCategoria}` : `http://localhost:3001/products`;

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
  }, [seleccionCategoria]);

  
    

    return (
        <Fragment>
          {loading && <p>Cargando...</p>}
          {error && <p> ERROR </p>}
          {data?.map((productos) => {
          return <Col key={productos.id} className="box" sm="12" md="6" lg="4">
            
            <Card>
              <Card.Img variant="top"  src={productos.image} />
              <Card.Body>
                <Card.Title className="titleCard">{productos.title}</Card.Title>
                <Card.Text className="precioCard">
                <p> {productos.description} </p>
                <span> $ {productos.price} </span>
                </Card.Text>
                
                <Link to={`/ItemDetailContainer/${productos.id}`} >
                <Button className="buttonCard">Ver mas</Button>
                </Link>
              </Card.Body>
            </Card>
            </Col>
            } )}
        </Fragment>

)
}
export default ProductsCard;



