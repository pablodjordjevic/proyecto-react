import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarx from './components/NavBar/Navbarx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
        <Navbarx />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/ItemDetailContainer/:id" component={ItemDetailContainer} />
        </Switch>
    </BrowserRouter>
    
  );
}


export default App;



