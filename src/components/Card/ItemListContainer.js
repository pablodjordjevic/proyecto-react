import { Card, Button, Col } from 'react-bootstrap';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import { Fragment } from 'react';



const ItemListContainer = () => {
  
  const arrayProductos = [
    {
      id : 1,
      nombre: "Headset Logitech G PRO X",
      img : "../../image/logo/logo.svg",
      precio : "25000",
    },
  
    {
      id : 2,
      nombre: "Gabinete Asus TUF",
      img : "../../image/logo/logo.svg",
      precio : "23000",
    },
  
    {
      id : 3,
      nombre: "Mouse Glorius Model O",
      img : "../../image/logo/logo.svg",
      precio : "7500",
    },

    {
      id : 4,
      nombre: "Teclado Steelseries Apex",
      img : "../../image/logo/logo.svg",
      precio : "32000",
    },
  
    {
      id : 5,
      nombre: "Mouse G-Wolves SKOLL",
      img : "../../image/logo/logo.svg",
      precio : "12000",
    },
  
    {
      id : 6,
      nombre: "Notebook Razer Blade",
      img : "../../image/logo/logo.svg",
      precio : "250000",
    },

  ];
  
  const getProductos = function(){
    return new Promise (function(res){
      setTimeout(function(){
        res(arrayProductos)
      }, 2000)
    })
  }

  getProductos().then(function(res){
    console.log(res);
  })



  return (
      <Fragment>
        {arrayProductos.map((productos) => {
        return <Col key={productos.id} className="box" sm="12" md="6" lg="4">
          <Card>
            <Card.Img variant="top" src={productos.img} />
            <Card.Body>
              <Card.Title>{productos.nombre}</Card.Title>
              <Card.Text>
              <span> $ {productos.precio} </span>
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



