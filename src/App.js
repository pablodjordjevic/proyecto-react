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
        <div className="">
          
          {/* PRODUCTOS CARDS */}
          <ItemListContainer
          id="Producto 1"
          src={logo}
          description="Descripcion del producto 1"/>

          <ItemListContainer
          id="Producto 2"
          src={logo}
          description="Descripcion del producto 2"/>

          <ItemListContainer
          id="Producto 3"
          src={logo}
          description="Descripcion del producto 3"/>
        
        </div>  
        
      </header>
    </div>
  );
}


export default App;



