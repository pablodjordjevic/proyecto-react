import { Container, Row} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarx from './components/NavBar/Navbarx';
import ItemListContainer from './components/Card/ItemListContainer';
import logo from './image/logo.svg';


function App() {
  return (
    <div className="App">
      <header>
        <Navbarx />
        <Container>       
        <Row className="g-4">
          {/* PRODUCTOS CARDS */}
          <ItemListContainer/>
        </Row>
        </Container>  
      </header>
      
    </div>
  );
}


export default App;



