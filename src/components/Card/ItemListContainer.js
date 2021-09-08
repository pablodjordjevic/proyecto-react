import { Card, Button } from 'react-bootstrap';
import './Card.css'


const ItemListContainer = (props) => {
  console.log(props)
  return (
    
      <div className="cardDiv">
        <Card>
          <Card.Img variant="top" src={props.src}/>
          <Card.Body>
            <Card.Title>{props.id}</Card.Title>
            <Card.Text>
            <span> {props.description} </span>
            </Card.Text>
            <Button className="Button" variant="primary">AGREGAR CARRITO</Button>
          </Card.Body>
        </Card>
        
    </div>
  
)}

export default ItemListContainer;